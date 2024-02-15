import {useEffect, useState} from "react";
import {User} from "./User";
import {usersService} from "../../services/users_service";

const GetUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div className={'main_block'}>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {GetUsers};