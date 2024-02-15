import {useNavigate} from "react-router-dom";

export const UserDetails = ({userDetails}) => {
    const {id, name, username, email, phone, website} = userDetails;

    const navigate = useNavigate();
    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div>username:{username}</div>
                <div>email:{email}</div>
                <div>phone:{phone}</div>
                <div>website:{website}</div>
                <button onClick={() => navigate('posts')} className={'button'}>Get posts of current user </button>
            </div>
        </div>
    );

}