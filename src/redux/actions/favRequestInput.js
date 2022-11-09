import { SET_FAV_REQUEST_INPUT } from "./actionTypes";

export const setFavRequestInput = (favRequestInput) => {
    return {
        type: SET_FAV_REQUEST_INPUT,
        payload: favRequestInput,
    }
}