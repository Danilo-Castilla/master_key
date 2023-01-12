import { ValidationError } from 'sequelize';
import boom from '@hapi/boom';

export function logError(err, req, res, next) {
  console.error(err);
  next(err)
}

export function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

export function handleErrorSQL(err, req, res, next) {
  if (err instanceof ValidationError) {
    throw boom.conflict(err.errors[0].message)
  }
  next(err);
}