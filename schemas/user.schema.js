import Joi from 'joi';

const userId = Joi.number().integer();
const name = Joi.string()
const username = Joi.string();
const email = Joi.string().email();
const password = Joi.string().alphanum().min(4).max(128);

export const createUserSchema = Joi.object({
  name: name.required(),
  username: username.required(),
  password: password.required(),
  email: email.required()
})

export const updateUserSchema = Joi.object({
  name: name,
  username: username,
  password: password,
  email: email
})

export const getUserSchema = Joi.object({
  id: userId.required()
})

export const deleteUserSchema = Joi.object({
  id: userId.required()
})