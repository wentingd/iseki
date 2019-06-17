import axios from 'axios';
import * as types from './constants';

export const fetchUser = async(payload) => {
  const response = await axios.post('/user/login', payload);
  console.log(response.status);
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export const fetchUserConfig = async(id) => {
  const response = await axios.get('user', id);
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export function login(authenticatedUser) {
  console.log(authenticatedUser);
  return {
    type: types.USER_LOCAL_LOGIN,
    user: authenticatedUser,
  };
}

export function logout() {
  return {
    type: types.USER_LOGOUT,
    user: {
      email: '',
      isAuthenticated: false,
    },
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
