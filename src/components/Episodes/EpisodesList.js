import {useEffect, useState} from "react";
import {Episode} from "./Episode";
import {episodesService} from "../../services/episodes_service";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks";

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    const {trigger} = useAppContext();

    useEffect(() => {
        episodesService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.items)
            setPrevNext({prev: data.prev, next: data.next})
        })
    }, [trigger, query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div className={'main_block'}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
        </div>
    );
};

export {EpisodesList};