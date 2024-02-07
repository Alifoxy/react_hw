import './style/UsersStyle.css';

export const PostDetails = ({postDetails}) => {
    const {id, userId, title, body} = postDetails;

    return(
        <div className={'post_details_block'}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>postTitle: {title}</div>
            <div>body: {body}</div>
        </div>
    );
}