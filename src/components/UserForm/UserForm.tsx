import React, {type FormEvent, useState} from 'react';
import type { User } from '../../types';

interface Props {
    addUser: (user: User) => void;
}

const UserForm: React.FC<Props> = ({addUser}) => {
    const [online, setOnline] = useState(false);

    const changeOnline = (e) => {
        setOnline(e.target.checked);
    }

    const [role, setRole] = useState('User');

    const changeRole = (e) => {
        setRole(e.target.value);
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (e: React.FormEvent)=> {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            alert('Please enter a valid email and name');
            return;
        }

        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            online,
            role,
        };

        addUser(newUser);

        setName('');
        setEmail('');
        setOnline(false);
        setRole('User');
    };

    return (
        <div>
            <h4 className='mt-2'>User form</h4>

            <form onSubmit={submitForm}>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="name">Email</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className='form-group'>
                    <p>Active
                        <input
                        type="checkbox"
                        checked={online}
                        onChange={changeOnline}
                        className='ms-2'
                        />
                    </p>
                </div>

                <div className='form-group'>
                    <select className='form-control' value={role} onChange={changeRole}>
                        <option value="User">User</option>
                        <option value="Editor">Editor</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Create user
                </button>
            </form>
        </div>
    );
};

export default UserForm;