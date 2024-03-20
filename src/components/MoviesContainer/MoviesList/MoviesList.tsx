import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../../hooks";
import {MovieCard} from "../MovieCard";
import {useAppDispatch} from "../../../hooks";
import {movieAction} from "../../../store";
import css from "./MovieList.module.css"

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query, _] = useSearchParams();
    const page = +query.get('page');

    useEffect(() => {
        dispatch(movieAction.getAll({page}))
    }, []);

    return (
        <div className={css.Main}>
            <div className={css.MoviesListContainer}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};