import './style/RunAppCss.css';
export const UserPost = ({post}) => {
  const {id, userId, title} = post;

  return(
      <div className={'post_block'}>
          <div>id: {id}</div>
          <div>userId: {userId}</div>
          <div>postTitle: {title}</div>
      </div>
  );
}