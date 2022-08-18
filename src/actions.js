import { LOAD_USER, UNLOAD_USER, UPDATE_COUNT } from "./constants";

export const setUser = (user) => ({
    type: LOAD_USER,
    payload: user
});


export const unloadUser = () => {
    return {
        type: UNLOAD_USER,
        payload: {}
    }
}


export const updateCount = (user) => {
    return {
        type: UPDATE_COUNT,
        payload: user
    }
} 