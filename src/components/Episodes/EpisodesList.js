import {useEffect, useState} from "react";
import {Episode} from "./Episode";
import {episodesService} from "../../services";
import {useSearchParams} from "react-router-dom";

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        episodesService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [query.get('page')]);

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
            <div className={'pagination_block'}>
                <button disabled={!prevNext.prev} onClick={prev} className={'button'}>prev</button>
                <button disabled={!prevNext.next} onClick={next} className={'button'}>next</button>
            </div>
        </div>
    );
};

export {EpisodesList};