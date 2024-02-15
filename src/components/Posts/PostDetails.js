export const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;

    return (
        <div className={'mini_block'}>
            <div>
                <div>userId: {userId}</div>
                <div>id:{id}</div>
                <div>title:{title}</div>
                <div>body:{body}</div>
            </div>
        </div>
    );

}