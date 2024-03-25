const baseMovieURL = process.env.REACT_APP_MOVIE_API;
const basePosterURL = process.env.REACT_APP_POSTER;

const baseTrailerURL = process.env.REACT_APP_TRAILER;

const movies = '/discover/movie';
const movieById = '/movie';
const genres = '/genre/movie/list';
const searchMovie = '/search/movie'

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `${movieById}/${id}`
    },
    genres: {
        base: genres,
        byMovieId: (movieId: number): string => `${genres}/${movieId}`
    },
    searchMovie,
    videos:{
        byId: (movieId: number): string => `${movieById}/${movieId}/videos`
    }
}

export {
    baseMovieURL,
    basePosterURL,
    baseTrailerURL,
    urls
}