import React, {FC, PropsWithChildren, useEffect} from 'react';

import {useAppDispatch, useAppQuery, useAppSelector} from "../../../hooks";
import {genresActions, movieAction} from "../../../store";

import css from "./GenresList.module.css"
import {Link, useParams} from "react-router-dom";
import {MovieCard} from "../../MoviesContainer";

interface IProps extends PropsWithChildren {

}

const GenresList: FC<IProps> = () => {
    const {genres, isLoading} = useAppSelector(state => state.genres);
    const {moviesByGenre} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {genreId} = useParams<{ genreId: string }>();
    const {page} = useAppQuery();

    useEffect(() => {
        dispatch(genresActions.getAll())

        if (genreId && page) {
            dispatch(movieAction.getByGenre({genreId, page}));
        }
    }, [dispatch, genreId, page]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.GenresContainer}>
            {genres.map(genre =>
                <div className={css.GenreBox} key={genre.id}>
                    <Link to={`/genres/${genre.id}`}>
                        <div><h5>{genre.name}</h5></div>
                    </Link>
                </div>)}
            <div>
                {moviesByGenre && moviesByGenre.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {GenresList};