import { Router } from 'express';
import customerRoute from '../routes/customer.routes.js'
import userRoute from '../routes/user.routes.js'
import loginRoute from '../routes/login.routes.js';

export function routerAPI(app) {
  const router = new Router();
  app.use('/api/v1', router);
  router.use('/customers', customerRoute);
  router.use('/users', userRoute);
  router.use('/login', loginRoute);
}