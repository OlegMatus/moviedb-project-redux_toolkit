import React, {useEffect} from 'react';

import {useAppDispatch, useAppQuery, useAppSelector} from "../../hooks";
import {movieAction} from "../../store";

import css from "./MoviePagination.module.css"

const MoviesPagination = () => {
    const dispatch = useAppDispatch();
    const {currentPage, totalPages, isLoading} = useAppSelector(state => state.movies);
    const {page, setQuery, /*prevPage, nextPage*/} = useAppQuery();

    const handlePrevPage = async () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            await dispatch(movieAction.getAll({page: newPage}));
            setQuery({page: newPage.toString()})
        }
    };

    const handleNextPage = async () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            if (newPage !== page) {
                await dispatch(movieAction.getAll({page: newPage}));
                setQuery({page: newPage.toString()})
            }
        }
    };

    useEffect(() => {
        dispatch(movieAction.getAll({page}));
    }, [dispatch, page]);

    return (
        <div className={css.Pagination}>
            <button onClick={handlePrevPage} disabled={currentPage === 1 || isLoading}>prev</button>
            <div style={{width: 30, display: "flex", justifyContent: "center", color: "black"}}><b>{currentPage}</b>
            </div>
            <button onClick={handleNextPage} disabled={currentPage === totalPages || isLoading}>next</button>

            {/*<button onClick={prevPage} disabled={currentPage === 1 || isLoading}>prev</button>*/}
            {/*<button onClick={nextPage} disabled={currentPage === totalPages || isLoading}>next</button>*/}
        </div>
    );
};

export {MoviesPagination};