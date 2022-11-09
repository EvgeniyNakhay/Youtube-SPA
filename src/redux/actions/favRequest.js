import { SET_REQUEST_F, SET_REQUEST_NAME_F, SET_SORT_BY_F, SET_MAX_RESULT_F} from "./actionTypes";

export const setRequestF = (requestF) => {
    return {
        type: 'SET_REQUEST_F',
        payload: requestF
    }
}
export const setRequestNameF = (requestNameF) => {
    return {
        type: 'SET_REQUEST_NAME_F',
        payload: requestNameF
    }
}
export const setSortByF = (sortByF) => {
    return {
        type: 'SET_SORT_BY_F',
        payload: sortByF 
    }
}
export const setMaxResultF = (maxResultF) => {
    return {
        type: 'SET_MAX_RESULT_F',
        payload: maxResultF 
    }
}

