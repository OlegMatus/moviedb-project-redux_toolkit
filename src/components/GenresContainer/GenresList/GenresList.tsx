import React, {FC, PropsWithChildren, useEffect} from 'react';

import {Badge} from "reactstrap";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../store";

import css from "./GenresList.module.css";
import {Spinner} from "../../Spinner";
import {GenreCard} from "../GenreCard";

interface IProps extends PropsWithChildren {

}

const GenresList: FC<IProps> = () => {
    const {genres, isLoading} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(genresActions.getAll());
        }
    }, [dispatch, genres.length]);

    return (
        <div className={css.GenresListContainer}>
            <Badge/>
            {!isLoading && genres.length > 0 &&
                genres.map(genre => <GenreCard key={genre.id} genre={genre}/>)}
            {isLoading && <Spinner/>}
        </div>
    );
};

export {GenresList};