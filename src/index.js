import { port, env } from './config/vars.js';
import logger from './config/logger.js';
import express from './config/express.js';
import mongoose from './config/mongoose.js';

// open mongoose connection
mongoose();

const app = express();
// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 * */
export default app;
