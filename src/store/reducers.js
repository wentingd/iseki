import * as types from './constants';
import { mockTrainData } from '../mockData';

const initialState = {
  user: {
    email: '',
    isAuthenticated: false,
    config: null,
    // email: 'we',
    // isAuthenticated: true,
    // config: mockUserConfig.we,
  },
  allTrainData: mockTrainData,
};

function combined(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOCAL_LOGIN:
      return { ...state, user: action.user };
    case types.USER_LOGOUT:
      return { ...state, user: action.user };
    case types.USER_GET_CONFIG:
      return { ...state, user: { ...action.user } };
    case types.CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
}

export default combined;
