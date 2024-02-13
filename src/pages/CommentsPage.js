import {Comments} from "../components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Comments</h2>
            </div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};