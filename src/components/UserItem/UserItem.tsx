import React from 'react';
import type {User} from '../../types';

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
    return (
        <div className='card mb-2 p-2'>
            <h3 className='card-title'>Name: {user.name}</h3>
            <p className='card-text'>Email: {user.email}</p>
            <p className='card-text'>Role: {user.role}</p>
            <p className='card-text'>Status: {user.online ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default UserItem;