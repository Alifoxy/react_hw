import {useNavigate} from "react-router-dom";

export const User = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();
    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <button onClick={() => navigate(id.toString())} className={'button'}>Get user`s details </button>
            </div>
        </div>
    );

}
