import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppQuery, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";
import {MovieCard} from "../MovieCard";

import css from "./GenreMovies.module.css"

interface IProps extends PropsWithChildren {

}

const GenreMovies: FC<IProps> = () => {
    const {moviesByGenre} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {genreId} = useParams<{ genreId: string }>();
    const {page} = useAppQuery();

    useEffect(() => {
        dispatch(movieAction.getByGenre({genreId, page}));
    }, [dispatch, genreId, page]);

    return (
        <div className={css.Main}>
            <div className={css.MoviesListContainer}>
                {moviesByGenre && moviesByGenre.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {GenreMovies};