import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

const Header = () => {

    return (
        <div className={css.Main}>
            <div className={css.Header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
                <NavLink to={'searchMovie'}>SEARCH MOVIE</NavLink>
            </div>
        </div>
    );
};

export {Header};