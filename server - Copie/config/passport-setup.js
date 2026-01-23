const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Assuming User model is in the models directory


passport.use(new GoogleStrategy({
    clientID: '1025380897123-2b6hk1qtp890slaulo4oih5o2cifq57g.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = new User({
          nom: profile.name.familyName,
          prenom: profile.name.givenName,
          email: profile.emails[0].value,
          googleId: profile.id,
          num_telephone: 'N/A',
          cin: 'BBcINVAAAAC',
          role: 'user'
        });
        await user.save();
      }
      cb(null, user);
    } catch (err) {
      cb(err);
    }
  }
));
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;  