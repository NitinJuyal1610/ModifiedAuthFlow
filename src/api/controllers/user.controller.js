import httpStatus from 'http-status';
import pkg from 'lodash';
const { omit } = pkg;
import User from '../models/user.model.js';

export const load = async (req, res, next, id) => {
  try {
    const user = await User.get(id);
    req.locals = { user };
    return next();
  } catch (error) {
    return next(error);
  }
};

export const get = (req, res) => res.json(req.locals.user.transform());

export const loggedIn = (req, res) => res.json(req.user.transform());

export const create = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.json(savedUser.transform());
  } catch (error) {
    next(User.checkDuplicateEmail(error));
  }
};

export const update = (req, res, next) => {
  const ommitRole = req.user.role !== 'admin' ? 'role' : '';
  const updatedUser = omit(req.body, ommitRole);
  const user = Object.assign(req.user, updatedUser);

  user
    .save()
    .then((savedUser) => res.json(savedUser.transform()))
    .catch((e) => next(User.checkDuplicateEmail(e)));
};

export const list = async (req, res, next) => {
  try {
    const role = req.user.role;
    if (role !== 'admin') {
      req.query.visibility = 'public';
    }
    const users = await User.list(req.query);
    const transformedUsers = users.map((user) => user.transform());
    res.json(transformedUsers);
  } catch (error) {
    next(error);
  }
};
