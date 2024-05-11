import express from 'express';
import userRoutes from './user.route.js';
import authRoutes from './auth.route.js';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from '../../utils/swaggerOptions.js';
import swaggerUi from 'swagger-ui-express';

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default express
  .Router()
  .get('/status', (req, res) => res.send('OK'))
  .use('/users', userRoutes)
  .use('/auth', authRoutes)
  .use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
