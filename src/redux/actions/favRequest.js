import { SET_QUERY_F, SET_QUERY_NAME_F, SET_SORT_BY_F, SET_MAX_RESULTS_F} from "./actionTypes";

export const setRequestF = (requestF) => {
    return {
        type: 'SET_REQUEST_F',
        payload: requestF
    }
}

export const setQueryF = (queryF) => ({
  type: 'SET_QUERY_F',
  payload: queryF
});

export const setQueryNameF = (nameF) => ({
    type: SET_QUERY_NAME_F,
    nameF
  });

  export const setSortByF = (sortByF) => ({
    type: 'SET_SORT_BY_F',
    payload: sortByF
  });

export const setMaxResultsF = (maxResultsF) => ({
  type: SET_MAX_RESULTS_F,
  maxResultsF
});
