import {GetCharactersList} from "../components/Characters/GetUsers";

const UsersPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Users</h2>
            </div>
            <GetCharactersList/>
        </div>
    );
};

export {UsersPage};