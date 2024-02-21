import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {EpisodesPage} from "./pages/UsersPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {CharactersPage} from "./pages/PostsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <EpisodesPage/>
            },
            {
                path: 'users/:userId', element: <UserDetailsPage/>, children: [
                    {
                        path: 'posts', element: <CharactersPage/>
                    },
                ]
            },
            {
                path: 'users/:userId/posts/:postId', element: <PostDetailsPage/>
            },

        ]
    }
]);

export {
    router
}