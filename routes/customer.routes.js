import { Router } from 'express';
import CustomerService from '../services/customer.service.js';
const router = Router();
import boom from '@hapi/boom';
import validatorHandler from '../middlewares/validator.handler.js';
import { createCustomerSchema, getCustomerSchema } from '../schemas/customer.schema.js';
import passport from 'passport';

const service = new CustomerService()

router.get('/', async (req, res) => {
  try {
    const customers = await service.find();
    res.json(customers)
  } catch (error) {
    res.json(error)
  }
})

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params
    try {
      const customerFound = await service.findOne(id);
      if (customerFound) {
        res.json(customerFound);
      }
      res.status(404).json({ message: 'Customer not found' })
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res) => {
    const data = req.body;
    try {
      const newCustomer = await service.create(data);
      res.json(newCustomer);
    } catch (error) {
      console.error(error)
    }
  })

router.patch('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

export default router;