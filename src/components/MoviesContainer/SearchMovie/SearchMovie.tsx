import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from 'react';

import {useAppDispatch, useAppLocation, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";
import {MovieCard} from "../MovieCard";

import css from "./SearchMovie.module.css"
import {Spinner} from "../../Spinner";

interface IProps extends PropsWithChildren {

}

const SearchMovie: FC<IProps> = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const dispatch = useAppDispatch();
    const {movieByQuery, isLoading} = useAppSelector(state => state.movies);
    const location = useAppLocation();

    const queryParams = new URLSearchParams(location.search);
    const page: string | null = queryParams.get('page');
    const search = async () => {
        try {
            await dispatch(movieAction.getByQuery({searchQuery, page: +page || 1}))
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
    }, [location.search, searchQuery]);

    return (
        <div className={css.Main}>
            <div className={css.SearchMovie}>
                <div className={css.input_block}>
                    <input type="text" placeholder={'searchMovie'} value={searchQuery} onChange={handleChange}
                           style={{width: 220}}/>
                    <button onClick={handleSearch} style={{background:"black", color: "white"}}>search</button>
                </div>
                {!isLoading &&
                    <div className={css.movies_block}>
                        {movieByQuery && movieByQuery.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                    </div>
                }
                {isLoading && <Spinner/>}
            </div>
        </div>
    );
};

export {SearchMovie};