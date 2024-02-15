import {useNavigate} from "react-router-dom";

export const UserPost = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    return (
        <div className={'mini_block2'}>
            <div>
                <div>title: {title}</div>
                <button onClick={() => navigate(id.toString())} className={'button'}>Get post`s details </button>
            </div>
        </div>
    );

}