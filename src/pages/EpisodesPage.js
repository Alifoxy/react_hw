import {GetCharactersList} from "../components/Episodes/GetUsers";

const EpisodesPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Users</h2>
            </div>
            <GetCharactersList/>
        </div>
    );
};

export {EpisodesPage};