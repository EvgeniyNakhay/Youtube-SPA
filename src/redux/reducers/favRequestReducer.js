import { SET_FAV_REQUEST } from '../actions/actionTypes';
import {v4 as uuidv4} from 'uuid';

const initialValue = [];

export default function favRequestReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_FAV_REQUEST: {
            return [...state, {id: uuidv4(), title: action.payload}];
        }
        default: {
            return state;
        } 
    }
}