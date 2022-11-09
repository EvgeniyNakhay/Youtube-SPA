import { SET_REQUEST_F, SET_REQUEST_NAME_F, SET_SORT_BY_F, SET_MAX_RESULT_F} from "../actions/actionTypes";
import {v4 as uuidv4} from 'uuid';

const initialFavourites = {   
    requestF: '',
    nameF: '',
    sortByF: 'viewCount',
    maxResultsF: 12,
};

export default function favRequestReducer(state = initialFavourites, action) {
    const {type, requestF, requestNameF, sortByF, maxResultF} = action;

    switch (type) {
        case SET_REQUEST_F: {
            return {...state, requestF};
        }
        case SET_REQUEST_NAME_F: {
            return {...state, requestNameF};
        }
        case SET_SORT_BY_F: {
            return {...state, sortByF};
        }
        case SET_MAX_RESULT_F: {
            return {...state, maxResultF};
        }
        default: {
            return state;
        } 
    }
}