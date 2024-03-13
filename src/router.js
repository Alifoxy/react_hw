import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CarsPage, ErrorPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars', element: <CarsPage/>
            },

        ]
    }
]);

export {
    router
}