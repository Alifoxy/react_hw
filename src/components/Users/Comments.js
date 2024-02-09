import React from 'react';
import { useEffect, useState } from "react";
import {CommentForm} from "./CommentForm";
import {Comment} from "./Comment";
import {CommentsService} from "../../services/comments_service";
import "./Style/UsersStyle.css"

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentsService.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block2'}>
                <hr/>
                <h1>Comments</h1>
                <hr/>
                <CommentForm setComments={setComments}/>
                <Comment comments={comments}/>
            </div>
        </div>
    );
};