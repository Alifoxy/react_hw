import {Comments} from "../components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            Comments
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};