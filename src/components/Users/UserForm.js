import React from 'react';
import { useForm } from "react-hook-form";
import { UsersService } from "../../services/users_service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator";


export const UserForm = ({setUsers}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(userValidator)});

    const submit = async (data) => {
        await UsersService.createUser(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
            <input type="text" placeholder="username" {...register('username')}/>
            {errors.username&&<span>{errors.username.message}</span>}
            <button disabled={!isValid} className={'button'}>Create new user</button>
        </form>
    );
};

