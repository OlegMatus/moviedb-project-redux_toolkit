import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";


import {useAppDispatch, useAppQuery, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";

const GenreMoviesPagination = () => {
    const dispatch = useAppDispatch();
    const {currentPage, totalPages, isLoading} = useAppSelector(state => state.movies);
    const {page, setQuery} = useAppQuery();
    const {genreId} = useParams<{ genreId: string }>();

    const handlePrevPage = async () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            await dispatch(movieAction.getByGenre({genreId, page: newPage}));
            setQuery({page: newPage.toString()})
        }
    };

    const handleNextPage = async () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            if (newPage !== page) {
                await dispatch(movieAction.getByGenre({genreId, page: newPage}));
                setQuery({page: newPage.toString()})
            }
        }
    };

    useEffect(() => {
        dispatch(movieAction.getByGenre({genreId, page}));
    }, [dispatch, page, genreId]);

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={handlePrevPage} disabled={currentPage === 1 || isLoading}>prev</button>
            <div style={{width: 30, display: "flex", justifyContent: "center", color: "black"}}><b>{currentPage}</b>
            </div>
            <button onClick={handleNextPage} disabled={currentPage === totalPages || isLoading}>next</button>
        </div>
    );
};

export {GenreMoviesPagination};