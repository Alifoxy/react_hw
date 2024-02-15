export const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={'mini_block2'}>
            <div>
                <div>postId:{postId}</div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>
            </div>
        </div>
    );

}