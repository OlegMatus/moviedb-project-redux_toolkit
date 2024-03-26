import React, {ChangeEvent, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {Pagination, Stack} from "@mui/material";

import {useAppDispatch, useAppQuery, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";

const GenreMoviesPagination = () => {
    const dispatch = useAppDispatch();
    const {currentPage, totalPages, isLoading} = useAppSelector(state => state.movies);
    const {page, setQuery} = useAppQuery();
    const {genreId} = useParams<{ genreId: string }>();

    const handlePageChange = async (event: ChangeEvent<unknown>, newPage: number) => {
        event.preventDefault();

        if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
            dispatch(movieAction.getAll({page: newPage}))
            setQuery({page: newPage.toString()})
        }
    }

    useEffect(() => {
        dispatch(movieAction.getByGenre({genreId, page}));
    }, [dispatch, page, genreId]);

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Stack spacing={2}>
                <Pagination count={totalPages} page={currentPage} showFirstButton={true} showLastButton={true}
                            onChange={handlePageChange} disabled={isLoading}/>
            </Stack>
        </div>
    );
};

export {GenreMoviesPagination};