import * as types from "./constants"

const initialState = {
    user: {
        // username: '',
        // isAuthenticated: false
        username: 'fake',
        isAuthenticated: true
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case types.USER_LOCAL_LOGIN:
            return { ...state, user: action.user };
        case types.USER_LOGOUT:
            return { ...state, user: action.user };
        case types.CLEAN_STATE:
            return initialState;
        default:
            return state;
    }
}

export default reducer;