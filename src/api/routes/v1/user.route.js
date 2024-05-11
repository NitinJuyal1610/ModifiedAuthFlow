import express from 'express';
import { validate } from 'express-validation';
import * as controller from '../../controllers/user.controller.js';
import { ADMIN, LOGGED_USER, authorize } from '../../middlewares/auth.js';
import upload from '../../middlewares/upload.js';

import {
  listUsers,
  createUser,
  updateUser,
} from '../../validations/user.validation.js';

const router = express.Router();

router.param('userId', controller.load);

router
  .route('/')
  .get(authorize(), validate(listUsers), controller.list)
  .post(authorize(ADMIN), validate(createUser), controller.create)
  .patch(authorize(), validate(updateUser), upload, controller.update);

router.route('/profile').get(authorize(), controller.loggedIn);

router.route('/:userId').get(authorize(LOGGED_USER), controller.get);

export default router;
