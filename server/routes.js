const express = require('express');
const axios = require('axios');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();
const { mockUserConfig } = require('../src/mockData');

const isValidUser = (email, password) => {
  if (process.env.USE_MOCK !== true) {
    return axios
      .post(`${process.env.ISEKI_API_BASE_URL}/users/login`, {
        email,
        password,
      })
      .then((response) => {
        return response.status === 200;
      })
      .catch((err) => {
        return false;
      });
  }
  return mockUserConfig[email].passwordHash === password;
};

passport.use(new LocalStrategy(((email, password, done) => {
  if (!isValidUser(email, password)) return done(null, false);
  return done(null, true);
})));

router.post('/login', (req, res, next) => {
  return passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      console.log('/login :: user unfound');
      return res.status(404).json({ msg: 'User not found.' });
    }
    console.log('/login :: success');
    return res.status(200).json({ isAuthenticated: user, email: req.body.email });
  })(req, res, next);
});

router.get('/user', (req, res, next) => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
      isAuthenticated: true,
    });
  }
  return res.status(401).json({
    error: 'Not Authenticated',
    authenticated: false,
  });
});

router.get('/user/:id/config', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('/user/:id/config :: ', req.body);
    if (err) return next(err);
    if (!user) {
      console.log('/config :: user unfound');
      return res.status(404).json({ msg: 'User not found.' });
    }
    const userConfig = mockUserConfig[req.query.id];
    return res.json({ config: userConfig });
  })(req, res, next);
});

// Use this to test that your API is working
router.get('/ping', (req, res) => {
  res.status(200).send('pong!');
});

module.exports = router;
