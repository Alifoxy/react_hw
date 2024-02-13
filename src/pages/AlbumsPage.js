import {Albums} from "../components/Albums/Albums";

const AlbumsPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Albums</h2>
            </div>
            <Albums/>
        </div>
    );
};

export {AlbumsPage};