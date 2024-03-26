import React from 'react';

import {MovieInfo} from "../../components";
import {useLoaderData} from "react-router-dom";
import {IMovieDetails} from "../../interfaces/movieDetailsInterface";

const MovieDetailsPage = () => {
    const {dataMovie: currentMovie, dataVideos: {results: videos}} = useLoaderData() as IMovieDetails;

    return (
        <div>
            <MovieInfo currentMovie={currentMovie} videos={videos}/>
        </div>
    );
};

export {MovieDetailsPage};