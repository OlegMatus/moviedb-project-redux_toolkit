import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";
import {themeReducer} from "./slices";
import {genresReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genresReducer,
        theme: themeReducer,

    }
});

export {
    store
}