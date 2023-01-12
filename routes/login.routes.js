import { Router } from 'express'
import passport from 'passport';
import loginService from '../services/login.service.js';

const router = Router();
const service = new loginService();

router.post('/',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      //const { user, password } = req.body;
      //const login = await service.getUser(user, password)
      const user = req.user;
      res.json(service.signToken(user))
    } catch (error) {
      console.log("Error en el Login");
      next(error)
    }
  })

export default router;