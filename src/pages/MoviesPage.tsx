import React from 'react';

import {MoviesList} from "../components/MoviesContainer/MoviesList";
import {MoviesPagination} from "../components/MoviesPagination";

const MoviesPage = () => {

    return (
        <div>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};