import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {GenreMovies} from "../../components";
import {GenreMoviesPagination} from "../../components/MoviesContainer/GenreMovies/GenreMoviesPagination";

interface IProps extends PropsWithChildren {

}

const GenreDetailsPage: FC<IProps> = () => {

    return (
        <div>
            <GenreMovies/>
            <GenreMoviesPagination/>
        </div>
    );
};

export {GenreDetailsPage};