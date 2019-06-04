import axios from 'axios';
import * as types from './constants';

const baseUrl = 'http://localhost:7001';

export const fetchUser = async(payload) => {
  const response = await axios.post(`${baseUrl}/login`, payload);
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export const fetchUserConfig = async(payload) => {
  console.log(payload);
  const response = await axios.post(`${baseUrl}/user/config`, payload);
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export function login(authenticatedUser) {
  return {
    type: types.USER_LOCAL_LOGIN,
    user: authenticatedUser,
  };
}

export function logout() {
  return {
    type: types.USER_LOGOUT,
    user: {
      username: '',
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
