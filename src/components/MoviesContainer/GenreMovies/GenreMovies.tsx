import React, {FC, PropsWithChildren, useEffect} from 'react';
// import {useParams} from "react-router-dom";
//
// import {useAppDispatch, useAppQuery, useAppSelector} from "../../../hooks";
// import {movieAction} from "../../../store";
// import {MovieCard} from "../MovieCard";
//
// interface IProps extends PropsWithChildren {
//
// }
//
// const GenreMovies: FC<IProps> = () => {
//     const {moviesByGenre} = useAppSelector(state => state.movies);
//     const dispatch = useAppDispatch();
//     const {genreId} = useParams<{ genreId: string }>();
//     const {page} = useAppQuery();
//
//     useEffect(() => {
//         dispatch(movieAction.getByGenre({genreId, page}))
//     }, [genreId]);
//
//
//     return (
//         <div>
//             {moviesByGenre && moviesByGenre.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
//         </div>
//     );
// };
//
// export {GenreMovies};