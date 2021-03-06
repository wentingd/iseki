import axios from 'axios';
import * as types from './constants';

export const fetchUser = async(payload) => {
  const response = await axios
    .post('/user/login', payload)
    .catch((err) => err.response);
  return response.data;
};

export const fetchUserConfig = async(id) => {
  const response = await axios.get(`/user/id/${id}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export const postToRegisterUser = async(payload) => {
  const response = await axios
    .post('/user/register', payload)
    .catch((err) => err.response);
  return response.data;
};

export function login(fetchedUser) {
  return {
    type: types.USER_LOCAL_LOGIN,
    user: fetchedUser,
  };
}

export function getUserConfig(config) {
  return {
    type: types.USER_GET_CONFIG,
    user: {
      config,
    },
  };
}

export function selectTrainline(trainline) {
  return {
    type: types.SELECT_TRAINLINE,
    selected: {
      trainline,
    },
  };
}

export function logout() {
  return {
    type: types.USER_LOGOUT,
    user: {
      email: '',
      isAuthenticated: false,
      token: '',
      config: { trains: [], stations: [] },
    },
  };
}
