import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions, movieAction} from "../../../store";
import {Spinner} from "../../Spinner";
import {MovieDetails} from "../MovieDetails";

import css from "./MovieInfo.module.css"
import {IMovie, IVideo} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    currentMovie: IMovie,
    videos: IVideo[]
}

const MovieInfo: FC<IProps> = ({currentMovie, videos}) => {
    const dispatch = useAppDispatch();

    const {isLoading} = useAppSelector(state => state.movies);
    const {genres} = useAppSelector(state => state.genres);

    const {id} = useParams();

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch]);

    useEffect(() => {
        dispatch(movieAction.getById({id: Number(id)}));
    }, [dispatch, id]);

    const movieGenres = currentMovie.genres.map(genreId =>
        genres.find(genre => genre.id === genreId.id)
    );

    const trailers = [...videos].filter(video => video.name === 'Official Trailer')
    const movieTitle = currentMovie && (currentMovie.title || currentMovie.original_title)

    return (
        <div className={css.MovieDetailsBlock}>
            {currentMovie && !isLoading && trailers.map(trailer => <MovieDetails key={currentMovie.id}
                                                                                 currentMovie={currentMovie}
                                                                                 trailer={trailer}
                                                                                 movieTitle={movieTitle}
                                                                                 genres={movieGenres}
            />)
            }
            {isLoading && <Spinner/>}
        </div>
    );
};

export {MovieInfo};