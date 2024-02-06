import './style/RunAppCss.css';
export const User = ({user, setUserId}) => {
    const {id, name, email} = user;

    return (
        <div className={'user_block'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <button onClick={()=>setUserId(id)} className={'button'}>Show user posts</button>
        </div>
    );
};

