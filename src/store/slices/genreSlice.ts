import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenres} from "../../interfaces";
import {genresService} from "../../services";

interface IState {
    genres: IGenre[],
    genresByMovieIds: IGenre[],
    isLoading: boolean,
    error: string
}

const initialState: IState = {
    genres: [],
    genresByMovieIds: [],
    isLoading: false,
    error: ''
};

const getAll = createAsyncThunk<IGenres, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
);

const getByMovieId = createAsyncThunk<IGenres, { id: number }>(
    'genreSlice/getByIds',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getByMovieId(id);
            return data;
            // const movieGenres = genres.filter((genre: { id: number }) => movie.genre_ids.includes(genre.id));
            // return { movieId: movie.id, genres: movieGenres };

            // return movieGenres
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false
                state.genres = action.payload.genres
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message || 'Failed to fetch genres'
            })
    .addCase(getByMovieId.fulfilled, (state, action) => {
        state.genresByMovieIds = action.payload.genres
    })
});

const {reducer: genresReducer, actions} = genreSlice;

const genresActions = {
    ...actions,
    getAll,
    getByMovieId
}

export {
    genresReducer,
    genresActions
}