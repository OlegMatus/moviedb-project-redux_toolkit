import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (page: number): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenres: (genreId: string): IRes<IMovie[]> => apiService.get(urls.movies.base, {
        params: {
            with_genres: genreId,
        }
    }),
    getByQuery: (query: string, page: number) => apiService.get(urls.searchMovie, {
        params: {
            query,
            page
        }
    })
};

export {moviesService};