import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {EpisodesPage, CharactersPage, ErrorPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            },
            {
                path: 'episodes/characters/:charId', element: <CharactersPage/>
            },

        ]
    }
]);

export {
    router
}