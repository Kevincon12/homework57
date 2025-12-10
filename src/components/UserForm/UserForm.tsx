import React, {useState} from 'react';

const UserForm = () => {
    const [online, setOnline] = useState(false);

    const changeOnline = (e) => {
        setOnline(e.target.checked);
    }

    const [role, setRole] = useState('User');

    const changeRole = (e) => {
        setRole(e.target.value);
    }


    return (
        <div>
            <h4 className='mt-2'>User form</h4>

            <form>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="name">Email</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
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