import React, {FC, PropsWithChildren, useEffect} from 'react';
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../store";

import css from "./GenresList.module.css";

interface IProps extends PropsWithChildren {

}

const GenresList: FC<IProps> = () => {
    const {genres, isLoading} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genres.length === 0){
            dispatch(genresActions.getAll());
        }
    }, [dispatch, genres.length]);

    return (
        <div className={css.GenresListContainer}>
            {!isLoading && genres.length > 0 &&
                genres.map(genre =>
                    <div className={css.GenreBox} key={genre.id}>
                        <Link to={`/genres/${genre.id}`}>
                            <div><h5>{genre.name}</h5></div>
                        </Link>
                    </div>)}
            {isLoading && <div>Loading...</div>}
        </div>
    );
};

export {GenresList};