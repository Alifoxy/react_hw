import {useEffect, useState} from "react";
import {Character} from "./User";
import {usersService} from "../../services/users_service";

const GetCharactersList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div className={'main_block'}>
            {users.map(user=><Character key={user.id} user={user}/>)}
        </div>
    );
};

export {GetCharactersList};