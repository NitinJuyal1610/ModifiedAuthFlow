import express from 'express';
import userRoutes from './user.route.js';
import authRoutes from './auth.route.js';

export default express
  .Router()
  .get('/status', (req, res) => res.send('OK'))
  .use('/users', userRoutes)
  .use('/auth', authRoutes);
