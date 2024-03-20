import {IMovie} from "./movieInterface";

export interface IPagination <T> {
    page: number;
    total_pages: number;
    total_results: number;
    results: T[];
}