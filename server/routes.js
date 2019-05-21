const express = require('express');
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mockUserConfig = require("../src/mockData").mockUserConfig;

const isValidUser = (username, password) => {
	for (let i=1; i <parseInt(process.env.MAX_USER) ; i++){
		return process.env['USER_' + i] === username && process.env['PASSWORD_' + i] === password;
	}
}

passport.use(new LocalStrategy(
	function(username, password, done) {
		if (!isValidUser(username, password)){
			return done(null, false)
		} else {
			return done(null, true);
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
		console.log('/login :: ', req.body);
		if (err) return next(err)
		if (!user) {
			console.log('/login :: user unfound')
			return res.status(404).json({ msg: 'User not found.' });
		}
		return res.json({ isAuthenticated: user, username: req.body.username })
	})(req, res, next);
});

router.get('/user/:id/config', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		console.log('/user/:id/config :: ', req.body);
		if (err) return next(err)
		if (!user) {
			console.log('/config :: user unfound')
			return res.status(404).json({ msg: 'User not found.' });
		}
		console.log(user)
		let userConfig = mockUserConfig[req.query.id];
		return res.json({ config: userConfig })
	})(req, res, next);
})

// Use this to test that your API is working
router.get('/ping', (req, res) => {
		res.status(200).send("pong!");
});

module.exports = router;