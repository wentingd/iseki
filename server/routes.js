const express = require('express');
const axios = require('axios');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const router = express.Router();
const logger = require('./logger');
const mockUser = require('../src/mock/mockUser');

const postToLoginUser = ({ email, password }) => {
  if (process.env.USE_MOCK === true) {
    return {
      success: mockUser[email].password === password,
    };
  }
  return axios
    .post(`${process.env.ISEKI_API_BASE_URL}/user/login`, { email, password })
    .then((response) => response.data)
    .catch((err) => {
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

passport.use(new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  ((jwtPayload, done) => {
    console.log(jwtPayload);
    // User.findOne({ id: jwtPayload.sub }, (err, user) => {
    //   if (err) {
    //     return done(err, false);
    //   }
    //   if (user) {
    //     return done(null, user);
    //   }
    // });
  }),
));

router.post('/user/login', async(req, res, next) => {
  const {
    success, token, id, message,
  } = await postToLoginUser(req.body);
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
  logger.error('Error loggin in :: user not found.');
  return res.status(404).json({ message });
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
