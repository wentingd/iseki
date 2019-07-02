const express = require('express');
const axios = require('axios');

const router = express.Router();
const logger = require('./logger');
const mockUser = require('../src/mock/mockUser');

const postToUserRoute = ({ email, password, username }, action) => {
  if (process.env.USE_MOCK === true) {
    return {
      success: mockUser[email].password === password,
    };
  }
  return axios
    .post(`${process.env.ISEKI_API_BASE_URL}/user/${action}`, { email, password, username })
    .then((response) => response.data)
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      }
      return { success: false, message: err.message };
    });
};

const getUserById = (id) => {
  if (process.env.USE_MOCK === true) {
    return {
      // TODO: add mocked user here
    };
  }
  return axios
    .get(`${process.env.ISEKI_API_BASE_URL}/user/id/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      return { success: false, message: err.message };
    });
};

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

router.post('/user/login', async(req, res, next) => {
  const {
    success, token, id, message,
  } = await postToUserRoute(req.body, 'login');
  if (success) {
    res.cookie('jwt', token);
    setAuthToken(token);
    return res.status(200).json({
      email: req.body.email,
      isAuthenticated: success,
      token,
      id,
    });
  }
  logger.error(`Error loggin in: ${message}`);
  return res.status(404).json({ message, success });
});

router.post('/user/register', async(req, res, next) => {
  const {
    success, email, username, _id, message,
  } = await postToUserRoute(req.body, 'register');
  if (success) {
    return res.status(200).json({
      success, email, username, id: _id,
    });
  }
  logger.error(`Error registering: ${message}`);
  return res.status(404).json({ message, success });
});

router.get('/user/id/:id', async(req, res, next) => {
  const { success, user, message } = await getUserById(req.params.id);
  if (success) {
    return res.status(200).json(user.config);
  }
  logger.error('Error getting user by id.');
  return res.status(500).json({ message });
});

router.get('/ping', (req, res) => {
  res.status(200).send('pong!');
});

module.exports = router;
