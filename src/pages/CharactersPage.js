import {GetUserPosts} from "../components/Posts/GetUserPosts";

const CharactersPage = () => {
    return (
        <div>
            <div className={'title_block2'}>
                <h2>User Posts</h2>
            </div>
            <GetUserPosts/>
        </div>
    );
};

export {CharactersPage};