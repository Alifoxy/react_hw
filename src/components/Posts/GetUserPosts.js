import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/posts_service";
import {UserPost} from "./UserPost";

const GetUserPosts = () => {
    const [userPosts, setUserPosts] = useState([])
    const {userId} = useParams()

    useEffect(() => {
        postsService.getPostsByUserId(userId).then(({data}) => setUserPosts(data))
    }, [userId]);

    return (
        <div className={'main_block'}>
            {userPosts.map(post=><UserPost key={post.id} post={post}/>)}
        </div>

    );
};

export {GetUserPosts};