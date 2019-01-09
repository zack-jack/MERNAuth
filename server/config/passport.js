const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');
const key = require('./keys');

// Set up options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: key.tokenSecret
};

// Create JWT strategy for login
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // Check if the payload user id exists in DB
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    // If user exists, call done with user obj
    // Otherwise, call done without user obj
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use passed in JWT strategy
passport.use(jwtLogin);
