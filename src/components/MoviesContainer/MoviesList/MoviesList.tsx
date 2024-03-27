import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {MovieCard} from "../MovieCard";
import {movieAction} from "../../../store";

import css from "./MovieList.module.css"
import {Spinner} from "../../Spinner";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const {movies, isLoading} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query] = useSearchParams();
    const page = +query.get('page');

    useEffect(() => {
        dispatch(movieAction.getAll({page}))
    }, [dispatch, page]);

    return (
        <div className={css.Main}>
            {!isLoading &&
                <div className={css.MoviesListContainer}>
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            }
            {isLoading && <Spinner/>}
        </div>
    );
};

export {MoviesList};