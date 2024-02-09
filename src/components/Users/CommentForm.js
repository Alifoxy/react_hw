import React from 'react';
import { useForm } from "react-hook-form";
import { CommentsService } from "../../services/comments_service";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/commentValidator";


export const CommentForm = ({setComments}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(commentValidator)});

    const submit = async (data) => {
        await CommentsService.addComment(data).then(({data}) => setComments((prevState) => [...prevState, data]))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
            <input type="text" placeholder="comment" {...register('name')}/>
            {errors.name&&<span>{errors.name.message}</span>}
            <button disabled={!isValid} className={'button'}>Create new comment</button>
        </form>
    );
};