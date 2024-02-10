import React from 'react';
import { useEffect, useState } from "react";
import {CommentForm} from "./CommentForm";
import {CommentsService} from "../../services/comments_service";
import {Comments} from "./Comments";
import "./Style/UsersStyle.css"

export const CommentsBox = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentsService.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <div className={'comments_div'}>
                <hr/>
                <h1>Comments</h1>
                <hr/>
                <CommentForm setComments={setComments}/>
                <Comments comments={comments} setComments={setComments}/>
            </div>
        </div>
    );
};