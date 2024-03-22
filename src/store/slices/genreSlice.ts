import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenres} from "../../interfaces";
import {genresService} from "../../services";

interface IState {
    genres: IGenre[],
    isLoading: boolean,
    error: string
}

const initialState: IState = {
    genres: [],
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
});

const {reducer: genresReducer, actions} = genreSlice;

const genresActions = {
    ...actions,
    getAll
}

export {
    genresReducer,
    genresActions
}