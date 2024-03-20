import React, {useEffect} from 'react';

import {MovieInfo} from "../components";
import {useAppDispatch, useAppQuery, useAppSelector} from "../hooks";
import {movieAction} from "../store";
import {useParams, useSearchParams} from "react-router-dom";

const MovieDetailsPage = () => {
const dispatch = useAppDispatch();

const {currentMovie} = useAppSelector(state => state.movies);
// const {query} = useAppQuery();
// const [query] = useSearchParams();
// const id=  +query.get('id');
    const id = useParams();

    useEffect(() => {
        console.log(id);
        const movie = dispatch(movieAction.getById({id: Number(id)}));
        console.log(movie);
    }, [dispatch, id]);

    return (
        <div>
            <MovieInfo/>
        </div>
    );
};

export {MovieDetailsPage};