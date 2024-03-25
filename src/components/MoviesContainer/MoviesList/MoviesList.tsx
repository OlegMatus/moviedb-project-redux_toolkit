import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {MovieCard} from "../MovieCard";
import {movieAction} from "../../../store";

import css from "./MovieList.module.css"
import {Spinner} from "../../Spinner";
import {Box, LinearProgress} from "@mui/material";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const [showSpinner, setShowSpinner] = useState<boolean>(true)
    const {movies, isLoading} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query, _] = useSearchParams();
    const page = +query.get('page');

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(false);
        }, 3000)

        return () => clearTimeout(timer)
    }, []);

    useEffect(() => {
        dispatch(movieAction.getAll({page}))
    }, []);

    return (
            <div className={css.Main}>
                {/*{showSpinner &&  <Box sx={{ width: '100%', color: '#1CB5E0'}}>*/}
                {/*    <LinearProgress />*/}
                {/*</Box>}*/}
                {!isLoading &&
                    <div className={css.MoviesListContainer}>
                        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                    </div>
                }
                {isLoading && <Spinner/>}
            </div>
            );
            };

            export {MoviesList};