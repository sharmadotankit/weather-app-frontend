import { LOAD_USER, UNLOAD_USER, UPDATE_COUNT } from "./constants";

const initialState = {
    loggedInUser: {
        id: '',
        email: '',
        name: '',
        count: ''
    },
    isSignedIn: false
}


export const loadUserOnSignIn = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_USER:
            // console.log(Object.assign({}, state, { loggedInUser: action.payload[0], isSignedIn: true }));
            // console.log(action.payload);
            return Object.assign({}, state, { loggedInUser: action.payload, isSignedIn: true });
        case UNLOAD_USER:

            return Object.assign({}, state, initialState);
        case UPDATE_COUNT:
            // console.log(action.payload);
            return Object.assign({}, state, { loggedInUser: action.payload })
        default:
            return state;
    }
}


