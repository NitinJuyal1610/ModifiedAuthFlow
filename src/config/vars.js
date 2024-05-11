import path from 'path';
import dotenvSafe from 'dotenv-safe';

const { pathname: __dirname } = new URL('.', import.meta.url);

dotenvSafe.config();

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpirationInterval = process.env.JWT_EXPIRATION_MINUTES;
export const mongo = {
  uri: process.env.MONGO_URI,
};
export const logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
