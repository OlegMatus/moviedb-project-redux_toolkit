import React, {ChangeEvent, useEffect} from 'react';

import {useAppDispatch, useAppQuery, useAppSelector} from "../../hooks";
import {movieAction} from "../../store";

import css from "./MoviePagination.module.css"
import {Pagination, Stack} from "@mui/material";

const MoviesPagination = () => {
    const dispatch = useAppDispatch();
    const {currentPage, totalPages, isLoading} = useAppSelector(state => state.movies);
    const {page, setQuery} = useAppQuery();

    // const handlePrevPage = async () => {
    //     if (currentPage > 1) {
    //         const newPage = currentPage - 1;
    //         await dispatch(movieAction.getAll({page: newPage}));
    //         setQuery({page: newPage.toString()})
    //     }
    // };
    //
    // const handleNextPage = async () => {
    //     if (currentPage < totalPages) {
    //         const newPage = currentPage + 1;
    //         if (newPage !== page) {
    //             await dispatch(movieAction.getAll({page: newPage}));
    //             setQuery({page: newPage.toString()})
    //         }
    //     }
    // };

    const handlePageChange = async (event: ChangeEvent<unknown>, newPage: number) => {
        event.preventDefault();

        if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
            dispatch(movieAction.getAll({page: newPage}))
            setQuery({page: newPage.toString()})
        }
    }

    useEffect(() => {
        dispatch(movieAction.getAll({page}));
    }, [dispatch, page]);

    return (
        <div className={css.Pagination}>
            {/*<button onClick={handlePrevPage} disabled={currentPage === 1 || isLoading}>prev</button>*/}
            {/*<div style={{width: 30, display: "flex", justifyContent: "center", color: "black"}}><b>{currentPage}</b>*/}
            {/*</div>*/}
            {/*<button onClick={handleNextPage} disabled={currentPage === totalPages || isLoading}>next</button>*/}
            <Stack spacing={2}>
                <Pagination count={totalPages} page={currentPage} showFirstButton={true} showLastButton={true}
                            onChange={handlePageChange} disabled={isLoading}/>
            </Stack>
        </div>
    );
};

export {MoviesPagination};