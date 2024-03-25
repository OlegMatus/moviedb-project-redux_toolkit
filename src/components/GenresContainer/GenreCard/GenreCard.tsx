import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";

import css from "./GenreCard.module.css";
import {Badge} from "reactstrap";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreCard: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    return (
        <div className={css.GenreBox}>
            <Link to={`/genres/${id}`}>
                <Badge color={'black'} pill={false} style={{color: "gold"}}>{name}</Badge>
            </Link>
        </div>
    );
};

export {GenreCard};