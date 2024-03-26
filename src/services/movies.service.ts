import {IRes} from "../types";
import {IMovie, IPagination, IVideos} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (page: number): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (genreId: string, page: number): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {
        params: {
            with_genres: genreId,
            page
        }
    }),
    getByQuery: (query: string, page: number) => apiService.get(urls.searchMovie, {
        params: {
            query,
            page
        }
    }),
    getVideoById: (id: number): IRes<IVideos> => apiService.get(urls.videos.byId(id))
};

export {moviesService};