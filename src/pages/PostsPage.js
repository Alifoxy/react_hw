import {Posts} from "../components/Posts/Posts";

const PostsPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>This comment belongs to the following post:</h2>
            </div>
            <Posts/>
        </div>
    );
};

export {PostsPage};