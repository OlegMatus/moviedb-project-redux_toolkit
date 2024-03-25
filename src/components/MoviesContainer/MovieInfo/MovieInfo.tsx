import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";
import {Spinner} from "../../Spinner";
import {MovieDetails} from "../MovieDetails";

import css from "./MovieInfo.module.css"

interface IProps extends PropsWithChildren {

}

const MovieInfo: FC<IProps> = () => {
    const dispatch = useAppDispatch();

    const {currentMovie, isLoading, videos} = useAppSelector(state => state.movies);
    // const {genres} = useAppSelector(state => state.genres);
    const {id} = useParams();

    useEffect(() => {
        const movie = dispatch(movieAction.getById({id: Number(id)}));
        console.log(movie);
    }, [dispatch, id]);

    const trailers = [...videos].filter(video => video.name === 'Official Trailer')
    const movieTitle = currentMovie && (currentMovie.title || currentMovie.original_title)

    return (
        <div className={css.MovieDetailsBlock}>
            {currentMovie && !isLoading && trailers.map(trailer => <MovieDetails currentMovie={currentMovie}
                                                                                 trailer={trailer}
                                                                                 movieTitle={movieTitle}/>)}
            {isLoading && <Spinner/>}
        </div>
    );
};

export {MovieInfo};