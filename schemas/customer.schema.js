import Joi from 'joi';

const customerId = Joi.number().integer();
const razonSocial = Joi.string()
const direccion = Joi.string();
const telefono = Joi.number().integer();
const responsableIt = Joi.string()
const ciudad = Joi.number().integer();
const ubicacion = Joi.string();
const fechaContrato = Joi.date();
const diagramaRed = Joi.string();

export const createCustomerSchema = Joi.object({
  razonSocial: razonSocial.required(),
  direccion: direccion.required(),
  telefono: telefono.required(),
  responsableIt: responsableIt.required(),
  ciudad: ciudad.required(),
  ubicacion: ubicacion.required(),
  fechaContrato: fechaContrato.required(),
  diagramaRed: diagramaRed.required()
})

export const updateCustomerSchema = Joi.object({
  razonSocial: razonSocial,
  direccion: direccion,
  telefono: telefono,
  responsableIt: responsableIt,
  ciudad: ciudad,
  ubicacion: ubicacion,
  fechaContrato: fechaContrato,
  diagramaRed: diagramaRed
})

export const getCustomerSchema = Joi.object({
  id: customerId.required()
})

export const deleteCustomerSchema = Joi.object({
  id: customerId.required()
})