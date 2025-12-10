import React from 'react';
import type {User} from "../../types";
import UserItem from "../UserItem/UserItem.tsx";

interface Props {
    users: User[];
}


const Users: React.FC<Props> = ({users}) => {
    return (
        <div>
            {users.map((user) => (
               <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;