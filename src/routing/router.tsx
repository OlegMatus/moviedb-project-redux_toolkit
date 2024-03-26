import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {GenresPage, MovieDetailsPage, MoviesPage} from "../pages";
import {SearchMovie} from "../components";
import {GenreDetailsPage} from "../pages/GenreDetailsPage/GenreDetailsPage";
import {moviesService} from "../services";
import {IMovieDetails} from "../interfaces/movieDetailsInterface";

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
                path: 'movies/:id',
                element: <MovieDetailsPage/>,
                loader: async ({params: {id}}): Promise<IMovieDetails> => {
                    try {
                        const {data: dataMovie} = await moviesService.getById(Number(id));
                        const {data: dataVideos} = await moviesService.getVideoById(Number(id))

                        return {dataMovie, dataVideos}
                    } catch (e) {
                        console.error("Failed to load movie details:", e);
                        throw e;
                    }
                },
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