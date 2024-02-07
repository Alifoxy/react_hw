import './style/UsersStyle.css';
export const User = ({user}) => {
    const {id, name, email} = user;

    return (
        <div className={'user_block'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div></div>
        </div>
    );
};

