const Post = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={'post_block'}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};