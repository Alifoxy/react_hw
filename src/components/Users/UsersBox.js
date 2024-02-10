import React from 'react';
import { useEffect, useState } from "react";
import {UserForm} from "./UserForm";
import {UsersService} from "../../services/users_service";
import {Users} from "./Users";
import "./Style/UsersStyle.css"

export const UsersBox = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UsersService.getAll().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            <div className={'users_div'}>
                <hr/>
                <h1>Users</h1>
                <hr/>
                <UserForm setUsers={setUsers}/>
                <Users users={users} setUsers={setUsers}/>
            </div>
        </div>
    );
};