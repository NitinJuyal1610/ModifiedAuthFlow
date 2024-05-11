import mongoose from 'mongoose';
import logger from './logger.js';
import { mongo, env } from './vars.js';

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
export default () => {
  mongoose.connect(mongo.uri).then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};
