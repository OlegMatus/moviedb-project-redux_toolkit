import React from 'react';

import {MoviesList, MoviesPagination} from "../../components";


const MoviesPage = () => {

    return (
        <div>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};