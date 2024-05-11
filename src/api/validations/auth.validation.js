import Joi from 'joi';

export const register = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(128),
  }),
};

export const login = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().max(128),
  }),
};

export const refresh = {
  body: Joi.object({
    email: Joi.string().email().required(),
    refreshToken: Joi.string().required(),
  }),
};

export const sendPasswordReset = {
  body: Joi.object({
    email: Joi.string().email().required(),
  }),
};

export const passwordReset = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(128),
    resetToken: Joi.string().required(),
  }),
};
