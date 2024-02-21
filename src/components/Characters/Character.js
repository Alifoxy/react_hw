import {useNavigate} from "react-router-dom";

export const Character = ({character}) => {
    const {id, name, chapter} = character;

    const navigate = useNavigate();
    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div></div>
            </div>
        </div>
    );

}