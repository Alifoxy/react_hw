import {GetUserPosts} from "../components/Posts/GetUserPosts";

const PostsPage = () => {
    return (
        <div>
            <div className={'title_block2'}>
                <h2>User Posts</h2>
            </div>
            <GetUserPosts/>
        </div>
    );
};

export {PostsPage};