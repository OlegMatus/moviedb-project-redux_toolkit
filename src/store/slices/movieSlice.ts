import {createAsyncThunk, createSlice, isPending, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination, IVideo} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    movies: IMovie[],
    moviesByGenre: IMovie[],
    movieByQuery: IMovie[],
    currentMovie: IMovie,
    videos: IVideo[],
    currentPage: number,
    totalPages: number,
    totalResults: number,
    isLoading: boolean,
    error: string
}

const initialState: IState = {
    movies: [],
    moviesByGenre: [],
    movieByQuery: null,
    currentMovie: null,
    videos: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 1,
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

const getById = createAsyncThunk<{ currentMovie: IMovie, videos: IVideo[] }, { id: number }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data: currentMovie} = await moviesService.getById(id);
            const {data: {results: videos}} = await moviesService.getVideoById(id);
            return {currentMovie, videos}
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
)

const getByGenre = createAsyncThunk<IPagination<IMovie>, { genreId: string, page: number }>(
    'movieSlice/getByGenreId',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getByGenreId(genreId, page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
);

const getByQuery = createAsyncThunk<IPagination<IMovie>, { searchQuery: string, page: number }>(
    'movieSlice/getByQuery',
    async ({searchQuery, page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getByQuery(searchQuery, page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data) || 'Failed to fetch movies'
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.currentMovie = action.payload.currentMovie;
                state.videos = action.payload.videos
            })
            .addCase(getByGenre.fulfilled, (state, action) => {
                state.isLoading = false;
                state.moviesByGenre = action.payload.results;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results
            })
            .addCase(getByQuery.fulfilled, (state, action) => {
                state.movieByQuery = action.payload.results
                state.totalPages = action.payload.total_pages
                state.totalResults = action.payload.total_results
            })
            .addMatcher(isPending(getAll, getByGenre), state => {
                state.isLoading = true;
                state.error = null
            })
            .addMatcher(isRejected(getAll, getByQuery, getByGenre), (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieAction = {
    ...actions,
    getAll,
    getById,
    getByGenre,
    getByQuery
}

export {
    movieReducer,
    movieAction,
}
