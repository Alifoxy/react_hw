import React, {useEffect, useState} from "react";
import {getUserPosts} from "./api/GetInfo";
import {UserPost} from "./UserPost";

export const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(userId).then(resp => setPosts(resp));
    }, [userId]);

    return (
        <div className={'posts_block'}>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );



};

