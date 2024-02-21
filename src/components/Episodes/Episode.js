import {useNavigate} from "react-router-dom";

export const Episode = ({episode}) => {
    const {id, name, chapter} = episode;

    const navigate = useNavigate();
    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div>chapter:{chapter}</div>
                <button onClick={() => navigate(id.toString())} className={'button'}>Show episode`s characters </button>
            </div>
        </div>
    );

}
