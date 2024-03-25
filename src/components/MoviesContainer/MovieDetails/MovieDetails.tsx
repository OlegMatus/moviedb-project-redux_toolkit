import React, {FC, PropsWithChildren} from 'react';

import {IMovie, IVideo} from "../../../interfaces";
import {basePosterURL, baseTrailerURL} from "../../../constants";
import {StarsRating} from "../../Rating";

import css from "./MovieDetails.module.css";

interface IProps extends PropsWithChildren {
    currentMovie: IMovie;
    trailer: IVideo;
    movieTitle: string
}

const MovieDetails: FC<IProps> = ({currentMovie, trailer, movieTitle}) => {
    const {
        title,
        original_title,
        original_language,
        release_date,
        runtime,
        poster_path,
        overview,
        vote_average
    } = currentMovie;

    const {key, name, official, type} = trailer;

    return (
        <div className={css.MovieInfoMain}>
            <div><h1>{title}</h1></div>
            <div><h2>({original_title})</h2></div>
            <div className={css.poster_container}>
                <div>
                    <img src={`${basePosterURL}/${poster_path}`} alt={original_title}
                         style={{width: 400, height: 550}}/>
                </div>
                <div className={css.info_block}>
                    <h3>Rating</h3>
                    <StarsRating vote_average={vote_average}/>
                    <h3>Genres</h3>
                    <div></div>
                    <h3>Language</h3>
                    <div><b>"{original_language}"</b></div>
                    <h3><b>Release Date</b></h3>
                    <div><b>{release_date}</b></div>
                    <h3>Runtime</h3>
                    <div><b>{runtime}min</b></div>
                </div>
            </div>
            <div style={{marginTop: 30}}><h3>Overview</h3></div>
            <div>
                <h4 style={{width: 800, height: 120, fontSize: 20}}>{overview}</h4>
            </div>
            <div className={css.trailer_block}>
                {trailer && (
                    <iframe title={movieTitle} width={760} height={415} src={`${baseTrailerURL}/${key}`}
                            content={type}>{movieTitle}
                    </iframe>
                )}
            </div>
        </div>
    );
};

export {MovieDetails};