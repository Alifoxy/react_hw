import {useNavigate} from "react-router-dom";

export const Episode = ({episode}) => {
    const {id, name, episode:chapter} = episode;

    const toCharacters = () => {
        const epId = episodes.map(episode => episode.split('/').slice(-1)[0]);
        navigate(`episodes/${epId}/characters`)
    };

    const navigate = useNavigate();
    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div>chapter:{chapter}</div>
                <button onClick={() => navigate(`${id.toString()}/characters`)} className={'button'}>Show episode`s characters </button>
            </div>
        </div>
    );

}
