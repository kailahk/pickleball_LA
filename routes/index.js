var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/dashboard',
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});

module.exports = router;
