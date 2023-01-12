import { Router } from 'express';
const router = Router();
import UserService from '../services/user.service.js';
import { getUserSchema, createUserSchema } from '../schemas/user.schema.js';
import validatorHandler from '../middlewares/validator.handler.js';
import boom from '@hapi/boom';

const service = new UserService();

router.get('/', async (req, res) => {
  try {
    const item = await service.find();
    res.json(item)
  } catch (error) {
    throw boom.badRequest(error);
  }
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const item = await service.findOne(id)
      if (item) {
        return res.json(item)
      }
      res.status(404).json({ message: 'User not found' })
    } catch (error) {
      //throw boom.badRequest(error);
      next(error);
    }
  })

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const newUser = await service.create(req.body);
      res.json(newUser)
    } catch (error) {
      //console.error(error)
      next(error)
    }
  })

router.patch('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

export default router;