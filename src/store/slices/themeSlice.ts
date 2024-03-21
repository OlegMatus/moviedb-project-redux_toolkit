import {createSlice} from "@reduxjs/toolkit";

export type ThemeType = 'light' | 'dark';

interface IState {
    theme: ThemeType
}

const initialState = {
    theme: localStorage.getItem('theme') as ThemeType || 'dark'
};
const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
});

const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {
    themeReducer,
    themeActions
}