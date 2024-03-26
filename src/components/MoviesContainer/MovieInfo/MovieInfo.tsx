import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";
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

    const {id} = useParams();

    useEffect(() => {
             dispatch(movieAction.getById({id: Number(id)}));
    }, [dispatch, id]);


    const trailers = [...videos].filter(video => video.name === 'Official Trailer')
    const movieTitle = currentMovie && (currentMovie.title || currentMovie.original_title)

    return (
        <div className={css.MovieDetailsBlock}>
            {currentMovie && !isLoading && trailers.map(trailer => <MovieDetails key={currentMovie.id}
                                                                                 currentMovie={currentMovie}
                                                                                 trailer={trailer}
                                                                                 movieTitle={movieTitle}/>)}
            {isLoading && <Spinner/>}
        </div>
    );
};

export {MovieInfo};