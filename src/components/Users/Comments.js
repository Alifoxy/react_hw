import React from 'react';
import { useEffect, useState } from "react";
import {CommentForm} from "./CommentForm";
import {Comment} from "./Comment";
import {CommentsService} from "../../services/comments_service";

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentsService.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block'}>
                <CommentForm setComments={setComments}/>
                <hr/>
                <Comment comments={comments}/>
            </div>
        </div>
    );
};