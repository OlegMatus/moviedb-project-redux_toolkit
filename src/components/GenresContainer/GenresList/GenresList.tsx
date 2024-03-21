import React, {FC, PropsWithChildren, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../store";
import {GenreCard} from "../GenreCard";

import css from "./GenresList.module.css"

interface IProps extends PropsWithChildren {

}

const GenresList: FC<IProps> = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, []);

    return (
        <div className={css.GenresContainer}>
            {genres.map(genre => <GenreCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};