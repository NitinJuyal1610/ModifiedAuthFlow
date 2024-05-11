import Joi from 'joi';
import User from '../models/user.model.js';

export const listUsers = {
  query: Joi.object({
    page: Joi.number().min(1),
    perPage: Joi.number().min(1).max(100),
    name: Joi.string(),
    email: Joi.string(),
    role: Joi.any().valid(...User.roles),
    phone: Joi.number().max(10),
    visibility: Joi.any().valid(...User.visibility),
  }),
};

export const createUser = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(128).required(),
    name: Joi.string().max(128),
    bio: Joi.string().max(1024),
    phone: Joi.number().max(10),
    visibility: Joi.any().valid(...User.visibility),
    role: Joi.any().valid(...User.roles),
  }),
};

export const updateUser = {
  body: Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6).max(128),
    name: Joi.string().max(128),
    role: Joi.any().valid(...User.roles),
    visibility: Joi.any().valid(...User.visibility),
    bio: Joi.string().max(1024),
    phone: Joi.string().max(10),
    picture: Joi.string().max(1024),
  }),
};
