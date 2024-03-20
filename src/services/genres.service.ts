import {IRes} from "../types";
import {IGenre} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../constants";

const genresService = {
    getAll: (): IRes<IGenre[]> => apiService.get(urls.genres)
};

export {genresService};