import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {GenresPage, MovieDetailsPage, MoviesPage} from "../pages";
import {SearchMovie} from "../components/MoviesContainer/SearchMovie";
import {GenreDetailsPage} from "../pages/GenreDetailsPage/GenreDetailsPage";

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
                path: 'genres', element: <GenresPage/>, children: [
                    {
                        path: ':genreId', element: <GenreDetailsPage/>
                    },
                ]
            },
            {
                path: 'searchMovie', element: <SearchMovie/>
            }
        ]
    }
])

export {
    router
}