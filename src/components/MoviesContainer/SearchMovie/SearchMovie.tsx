import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from 'react';

import {useAppDispatch, useAppLocation, useAppQuery, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";
import {MovieCard} from "../MovieCard";

import css from "./SearchMovie.module.css"

interface IProps extends PropsWithChildren {

}

const SearchMovie: FC<IProps> = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const dispatch = useAppDispatch();
    const {movieByQuery} = useAppSelector(state => state.movies);
    const {query, /*page*/} = useAppQuery();
    const location = useAppLocation();

    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const search = () => {
        try {
            dispatch(movieAction.getByQuery({searchQuery, page: +page || 1}))
        } catch (e) {
            console.error('Error searching movies:', e);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = () => {
        search()
    }

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            search();
        }
    }, [location.search]);

    return (
        <div className={css.SearchMovie}>
            <div className={css.input_block}>
                <input type="text" placeholder={'searchMovie'} value={searchQuery} onChange={handleChange}/>
                <button onClick={handleSearch}>search</button>
            </div>
            <div className={css.movies_block}>
                {movieByQuery && movieByQuery.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {SearchMovie};