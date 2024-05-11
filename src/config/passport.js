import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { jwtSecret } from './vars.js';
import authProviders from '../api/services/authProviders.js';
import User from '../api/models/user.model.js';

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
};

const jwt = async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    return done(null, user || false);
  } catch (error) {
    return done(error, false);
  }
};

const oAuth = (service) => async (token, done) => {
  try {
    console.log(token, '-');
    const userData = await authProviders[service](token);
    const user = await User.oAuthLogin(userData);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwt);
const google = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.SITE_URL || '/v1/auth/google/callback',
  },
  async function (accessToken, refreshToken, profile, cb) {
    const user = await User.oAuthLogin({
      id: profile.id,
      service: 'google',
      email: profile.emails[0].value,
      name: profile.displayName,
      picture: profile.photos[0].value,
    });
    return cb(null, user);
  },
);

export default {
  jwtStrategy,
  google,
};
