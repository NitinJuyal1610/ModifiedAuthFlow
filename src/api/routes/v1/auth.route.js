import express from 'express';
import { validate } from 'express-validation';
import * as controller from '../../controllers/auth.controller.js';
import { authorize, oAuth as oAuthLogin } from '../../middlewares/auth.js';
import { login, register } from '../../validations/auth.validation.js';
import passport from 'passport';

const router = express.Router();

router.post('/register', validate(register), controller.register);

router.post('/login', validate(login), controller.login);

router.post('/logout', authorize(), controller.logout);

router.route('/google').get(oAuthLogin('google'), controller.oAuth);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    res.send('Logged In Successfully');
  },
);

export default router;
