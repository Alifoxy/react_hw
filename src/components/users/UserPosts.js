import React, {useEffect, useState} from "react";
import {UserPost} from "./UserPost";
import {PostDetails} from "./PostDetails";
import './style/UsersStyle.css';
import {PostsService} from "../../services/posts_service";

export const UserPosts = ({userID}) => {
    const [postDetails, setPostDetails] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        PostsService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            <div className={'posts_block'}>
                {posts.map(post => <UserPost key={post.id} post={post} setPostDetails={setPostDetails}/>)}
            </div>
            <div className={'posts_details_block'}>
                {postDetails&&<PostDetails postDetails={postDetails}/>}
            </div>
        </div>

    );



};

