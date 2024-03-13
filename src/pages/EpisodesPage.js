import {EpisodesList, EpisodePagination} from "../components";

const EpisodesPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Episodes</h2>
            </div>
            <EpisodesList/>
            <EpisodePagination/>
        </div>
    );
};

export {EpisodesPage};