import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../constants";

const genresService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genres)
};

export {genresService};