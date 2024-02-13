import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {PostsPage} from "./pages/PostsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {CommentsPage} from "./pages/CommentsPage";
import {TodosPage} from "./pages/TodosPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'albums'}/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: 'posts', element: <PostsPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'todos', element: <TodosPage/>
            }
        ]
    }
]);

export {
    router
}