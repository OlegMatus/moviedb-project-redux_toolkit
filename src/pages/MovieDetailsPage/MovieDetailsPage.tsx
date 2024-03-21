import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "../../components";
import {movieAction} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";

import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    const dispatch = useAppDispatch();

    const {currentMovie} = useAppSelector(state => state.movies);
    const {movieId} = useParams();

    useEffect(() => {
        const movie = dispatch(movieAction.getById({movieId: Number(movieId)}));
        console.log(movie);
    }, [dispatch, movieId]);

    return (
        <div className={css.MovieDetailsBlock}>
            {currentMovie && <MovieInfo currentMovie={currentMovie}/>}
        </div>
    );
};

export {MovieDetailsPage};