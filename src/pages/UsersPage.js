import {GetUsers} from "../components/Users/GetUsers";

const UsersPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Users</h2>
            </div>
            <GetUsers/>
        </div>
    );
};

export {UsersPage};