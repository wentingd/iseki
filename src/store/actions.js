import axios from 'axios';

export const USER = 'USER';

export function login(payload) {
    axios.post('http://localhost:7001/login', {
        username: payload.username,
        password: payload.password
    }).then(response => {
        console.log(response)
    });
    return {
        type: USER,

    }
}