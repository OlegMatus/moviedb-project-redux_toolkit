import axios from "axios";

import {baseMovieURL} from "../constants";

const apiService = axios.create({baseURL: baseMovieURL});

apiService.interceptors.request.use(request => {
    const apiToken: string = process.env.REACT_APP_TOKEN
    request.headers.Authorization = `Bearer ${apiToken}`

    return request
})

export {
    apiService
}
