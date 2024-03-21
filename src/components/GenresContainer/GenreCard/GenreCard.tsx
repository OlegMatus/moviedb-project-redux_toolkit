import React, {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../../interfaces";
import css from "./GenreCard.module.css";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreCard: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    return (
        <div className={css.GenreBox}>
            <Link to={'/genres/:id'}>
            <div><h5>{name}</h5></div>
            </Link>
        </div>
    );
};

export {GenreCard};