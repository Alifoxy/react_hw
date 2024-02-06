import React, { useEffect, useState } from 'react';
import {getUsers} from "./api/GetInfo";
import {User} from "./User";

export const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(resp => setUsers(resp));
    }, []);

    return (
        <div className={'users_block'}>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
}

