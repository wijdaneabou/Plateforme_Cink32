const User = require('../models/User.js');
const passport = require('passport');

// Function to handle the Google Authentication
const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
const googleCallback = (req, res, next) => {
  passport.authenticate('google', { 
    failureRedirect: process.env.REACT_APP_FAILURE_REDIRECT_URL,
    successRedirect: process.env.REACT_APP_SUCCESS_REDIRECT_URL
  })(req, res, next);
};

module.exports = {
    googleAuth,
    googleCallback
  };