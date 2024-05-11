import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import routes from '../api/routes/v1/index.js';
import { logs } from './vars.js';
import strategies from './passport.js';
import { converter, notFound, handler } from '../api/middlewares/error.js';

export default function createApp() {
  const app = express();

  app.use(morgan(logs));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(compress());
  app.use(methodOverride());
  app.use(helmet());
  app.use(cors());

  app.use(passport.initialize());
  passport.use('jwt', strategies.jwtStrategy);
  passport.use('google', strategies.google);

  app.use('/v1', routes);
  app.use(converter);
  app.use(notFound);
  app.use(handler);

  return app;
}
