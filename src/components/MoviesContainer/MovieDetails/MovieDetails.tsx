import React, {FC, PropsWithChildren} from 'react';

import {IGenre, IMovie, IVideo} from "../../../interfaces";
import {basePosterURL, baseTrailerURL} from "../../../constants";
import {StarsRating} from "../../Rating";

import css from "./MovieDetails.module.css";
import {Link} from "react-router-dom";
import {Badge} from "reactstrap";

interface IProps extends PropsWithChildren {
    currentMovie: IMovie;
    trailer: IVideo;
    movieTitle: string;
    genres: IGenre[]
}

const MovieDetails: FC<IProps> = ({currentMovie, trailer, movieTitle, genres}) => {
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

    const {key, type} = trailer;

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
                    <div>
                        <h3>Genres</h3>
                        {genres && genres.map(genre => (
                            <div key={genre?.id}>
                                <Link to={`/genres/${genre?.id}`}>
                                    <Badge color={'black'} pill={false}
                                           style={{color: "#9aa43a"}}><b>{genre?.name || 'Unknown Genre'}</b></Badge>
                                </Link>
                            </div>
                        ))}
                        {genres.length === 0 && <div>No genres available</div>}
                    </div>
                    <h3>Language</h3>
                    <div>
                        <Badge color={'black'} pill={false}
                               style={{color: "#9aa43a"}}><b>"{original_language}"</b></Badge>
                    </div>
                    <h3><b>Release Date</b></h3>
                    <div>
                        <Badge color={'black'} pill={false} style={{color: "#9aa43a"}}><b>{release_date}</b></Badge>
                    </div>
                    <h3>Runtime</h3>
                    <div>
                        <Badge color={'black'} pill={false} style={{color: "#9aa43a"}}><b>{runtime}min</b></Badge>
                    </div>
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