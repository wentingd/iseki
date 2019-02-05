import * as types from "./constants"
import { mockTrainData, mockUserConfig } from "../test/mockData"

const initialState = {
    user: {
        // username: '',
        // isAuthenticated: false,
        // config: null,
        username: 'we',
        isAuthenticated: true,
        config: mockUserConfig.we
    },
    allTrainData: mockTrainData
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case types.USER_LOCAL_LOGIN:
            return { ...state, user: action.user };
        case types.USER_LOGOUT:
            return { ...state, user: action.user };
        case types.USER_GET_CONFIG:
            return { ...state, user: {...action.user} };
        case types.CLEAN_STATE:
            return initialState;
        default:
            return state;
    }
}

export default reducer;