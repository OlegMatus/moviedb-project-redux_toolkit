import axios from "axios";

import {baseMovieURL} from "../constants";

const apiService = axios.create({
    baseURL: baseMovieURL, /*headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }*/
})

apiService.interceptors.request.use(request => {
    const apiToken: string = process.env.REACT_APP_TOKEN
    // request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTczOTJhN2UxNDJhNGNiOGY4Mzk1YTFjMjc5NjJhZCIsInN1YiI6IjY0YzEwMGJiNjA2MjBhMDEzYjBmMDZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6lDVGUYZgrx4A2eMv92GOZxgo6IQXXxegjj0Lw5cQQQ`
    request.headers.Authorization = `Bearer ${apiToken}`

    return request
})

export {
    apiService
}
