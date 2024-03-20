import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    movies: IMovie[],
    currentMovie: IMovie,
    currentPage: number,
    totalPages: number,
    isLoading: boolean,
    error: string
}

const initialState: IState = {
    movies: [],
    currentMovie: null,
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: ''
};
const getAll = createAsyncThunk<IPagination<IMovie>, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
)

const getById = createAsyncThunk <IMovie, {id: number}> (
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
try {
    const {data} = await moviesService.getById(id);
    return data
}catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error.response.data)
}
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.pending, state => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.currentMovie = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieAction = {
    ...actions,
    getAll,
    getById
}

export {
    movieReducer,
    movieAction,
}
