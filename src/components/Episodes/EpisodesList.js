import {useEffect} from "react";
import {Episode} from "./Episode";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {episodesActions} from "../../store";

const EpisodesList = () => {
    const {episodes} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    const page = query.get('page');


    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page])


    return (
        <div className={'main_block'} >
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {EpisodesList};

