import React, { useEffect, useState } from 'react';
import {User} from "./User";
import {UsersService} from "../../services/users_service";
import {UserPosts} from "./UserPosts";
import './style/UsersStyle.css';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [userID, setUserID]= useState([]);

    useEffect(() => {
        UsersService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={'main_block2'}>
            <div className={'users_block'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <UserPosts/>
        </div>
    );
}

