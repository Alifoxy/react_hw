import React from 'react';
import { useEffect, useState } from "react";
import {UserForm} from "./UserForm";
import {User} from "./User";
import {UsersService} from "../../services/users_service";
import "./Style/UsersStyle.css"

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UsersService.getAll().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block'}>
                <hr/>
                <h1>Users</h1>
                <hr/>
                <UserForm setUsers={setUsers}/>
                <User users={users}/>
            </div>
        </div>
    );
};