import React from 'react';

import {GenresList} from "../../components";
import {Outlet} from "react-router-dom";

const GenresPage = () => {

    return (
        <div>
            <GenresList/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};