import { SET_ACTION, ADD_ACTION, DELETE_ACTION } from "./constants";

export const setAction = (payload) => {
    return {
        type: SET_ACTION,
        payload
    }
}

export const addAction = (payload) => {
    return {
        type: ADD_ACTION,
        payload
    }
}

export const deleteAction = (payload) => {
    return {
        type: DELETE_ACTION,
        payload
    }
}