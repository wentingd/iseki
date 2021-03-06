import * as types from './constants';
import mockTrainData from '../mock/mockTrainData';

const initialState = {
  user: {
    email: '',
    isAuthenticated: false,
    token: '',
    config: { trainlines: [], stations: [] },
  },
  allTrainData: mockTrainData,
  selected: {
    trainline: null,
  },
};

function combined(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOCAL_LOGIN:
      return { ...state, user: { ...state.user, ...action.user } };
    case types.USER_GET_CONFIG:
      return { ...state, user: { ...state.user, ...action.user } };
    case types.USER_LOGOUT:
      return { ...state, user: action.user };
    case types.SELECT_TRAINLINE:
      return { ...state, selected: { ...state.selected, ...action.selected } };
    case types.CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
}

export default combined;
