import {GetPostDetails} from "../components/Posts/GetPostDetails";
import {GetComments} from "../components/Comments/GetComments";

const PostDetailsPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Post Details</h2>
            </div>
            <GetPostDetails/>
            <div className={'title_block'}>
                <h2>Post Comments</h2>
            </div>
            <GetComments/>
        </div>
    );
};

export {PostDetailsPage};