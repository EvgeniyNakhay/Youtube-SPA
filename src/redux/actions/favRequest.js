import {SET_FAV_REQUEST} from "./actionTypes";

export const setFavRequest = (favRequest) => {
    return {
        type: 'SET_FAV_REQUEST',
        payload: favRequest
    }
}

// export const setQueryF = (queryF) => ({
//   type: 'SET_QUERY_F',
//   payload: queryF
// });

// export const setQueryNameF = (nameF) => ({
//     type: SET_QUERY_NAME_F,
//     nameF
//   });

//   export const setSortByF = (sortByF) => ({
//     type: 'SET_SORT_BY_F',
//     payload: sortByF
//   });

// export const setMaxResultsF = (maxResultsF) => ({
//   type: SET_MAX_RESULTS_F,
//   maxResultsF
// });
