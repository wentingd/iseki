import axios from 'axios';
import * as types from "./constants"

export const fetchUser = async (payload) => {
    const response = await axios.post('http://localhost:7001/login', payload);
    if (response.status === 200) {
        return response.data;
    } else {
        return null;
    }
}

export function login (authenticatedUser) {
    return {
        type: types.USER_LOCAL_LOGIN,
        user: authenticatedUser
    }
}

export function logout() {
    return {
        type: types.USER_LOGOUT,
        user: {
            username: '',
            isAuthenticated: false,
        }
    }
}