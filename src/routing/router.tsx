import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {GenresPage, MovieDetailsPage, MoviesPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            },
            {
                path: 'movies/:id', element: <MovieDetailsPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
])

export {
    router
}