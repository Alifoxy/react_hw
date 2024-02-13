import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/posts_service";
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postsService.getPostsById(postId).then(({data})=>setPosts(data))
    }, [postId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};