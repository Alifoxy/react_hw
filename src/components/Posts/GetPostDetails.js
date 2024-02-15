import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PostDetails} from "./PostDetails";
import {postsService} from "../../services/posts_service";

const GetPostDetails = () => {
    const [postDetails, setPostDetails] = useState([])
    const {postId} = useParams()

    useEffect(() => {
        postsService.getPostsById(postId).then(({data}) => setPostDetails(data))
    }, [postId]);


    return (
        <div className={'main_block'}>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>

    );
};

export {GetPostDetails};