import {createSlice} from "@reduxjs/toolkit";
//
// interface IState {
//     vote_averageState: number
// }
//
// const initialState: IState = {
//     vote_averageState: 0
// };
// const ratingSlice = createSlice({
//     name: 'ratingSlice',
//     initialState,
//     reducers: {
//         setVoteAverage: (state, action) => {
//             state.vote_averageState = action.payload.value
//         }
//     }
// });
//
// const {reducer: voteAverageReducer , actions } = ratingSlice;
//
// const voteAverageActions = {
//     ...actions
// }
//
// export {
//     voteAverageReducer,
//     voteAverageActions
// }