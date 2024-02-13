import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/posts_service";
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPost] = useState([])
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postsService.getAll().then(({data}) => {
            const post = data.filter(item => item.id === postId)
            setPost(post)
        )}
    }

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );

};

export {Posts};