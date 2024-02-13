import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/posts_service";

const Posts = () => {
    const [post, setPost] = useState([])
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postsService.getPostsById(postId).then(({data}) => setPost(data))
    }, [postId]);

    const {id, userId, title, body} = post;
    return (
        <div className={'main_block'}>
            <div className={'mini_block'}>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        </div>

    );
};

export {Posts};