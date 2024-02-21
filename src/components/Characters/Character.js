export const Character = ({character}) => {
    const {id, name,  links:{image}, episodes} = character;

    const toEpisodes = () => {
        const epId = episodes.map(episode => episode.split('/').slice(-1)[0]).join(',');
        navigate(`episodes/${epId}/characters`)
    };

    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <div><img src={image} alt={'character'}/></div>
            </div>
        </div>
    );

}