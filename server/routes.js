const express = require('express');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

const userlist = process.env.USER_LIST.split(',');
const passwordlist = process.env.PASSWORD_LIST.split(',');

const isValidUser = (username, password) => {
	if (userlist.contains(username)) {
		return password === passwordlist[userlist.indexOf(username)];
	} else {
		return false;
	}
};

passport.use(new LocalStrategy(
	function(username, password) {
		if (!isValidUser(username, password)){
			return { username: username, msg: 'incorrect user' }
		} else {
			return { username: username, isAuthenticated: true };
		}
	}
  ));

router.get('/user', (req, res, next) => {
    if(req.user) {
        return res.status(200).json({
            user: req.user,
            isAuthenticated: true
        });
    } else {
		return res.status(401).json({
			error: 'Not Authenticated',
			authenticated: false
		});
	}
});

router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		console.log('/login handler', req.body);
		if (err) { return next(err); }
		if (!user) { return res.status(500).json({ error: 'User not found.' }); }
	})(req, res, next);
});

// Use this to test that your API is working
router.get('/ping', (req, res) => {
		res.status(200).send("pong!");
});

module.exports = router;