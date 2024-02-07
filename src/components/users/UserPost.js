import './style/UsersStyle.css';

export const UserPost = ({post,setPostDetails}) => {
  const {title} = post;

  return(
      <div className={'post_block'}>
          <div>postTitle: {title}</div>
          <button onClick={()=>setPostDetails(post)} className={'button'}>Show post details</button>
      </div>
  );
}