import { SET_FAV_REQUEST } from "./actionTypes";

export const setFavRequest = (favRequest) => {
    return {
        type: SET_FAV_REQUEST,
        payload: favRequest,
    }
}