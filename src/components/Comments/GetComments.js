import {useEffect, useState} from "react";
import {Comment} from "./Comment";
import {commentsService} from "../../services/comments_service";
import {useParams} from "react-router-dom";

const GetComments = () => {
    const [comments, setComments] = useState([])
    const {postId} = useParams()

    useEffect(() => {
        commentsService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId]);

    return (
        <div className={'main_block2'}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {GetComments};