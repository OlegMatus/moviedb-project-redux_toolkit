import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {PosterPreview} from "../../Poster";
import {StarsRating} from "../../Rating";

import css from "./MovieCard.module.css"

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie;

    return (
        <div className={css.MovieCard}>
            <Link to={`/movies/${id}`}>
                <PosterPreview poster_path={poster_path} movie={movie}/>
            </Link>
            <StarsRating vote_average={vote_average}/>
            <b>{original_title}</b>
        </div>
    );
};

export {MovieCard};