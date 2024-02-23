import {useNavigate} from "react-router-dom";

export const Episode = ({episode}) => {
    const {id, name, episode:chapter, characters} = episode;

    const toCharacters = () => {
        const charId = characters.map(character => character.split('/').slice(-1)[0]);
        navigate(`characters/${charId}`)
    };

    const navigate = useNavigate();
    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div>chapter:{chapter}</div>
                <button onClick={toCharacters} className={'button'}>Show episode`s characters </button>
            </div>
        </div>
    );

}
