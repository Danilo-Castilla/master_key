import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import { config } from '../config/config.js';
import usuarioService from '../services/user.service.js';
import jwt from 'jsonwebtoken';

const service = new usuarioService();

class LoginService {
  constructor() { }

  async getUser(user, pass) {
    const userFound = await service.findByUser(user);
    if (!userFound) {
      throw boom.unauthorized('error to login, password or user incorrect!')
    }

    const isMatch = await bcrypt.compare(pass, userFound.password)

    if (!isMatch) {
      throw boom.unauthorized('error to login, password or user incorrect!')
    }

    delete userFound.dataValues.password
    return userFound;
  }

  signToken(user){
    const tokenUserPayload = {
      sub: user.userId,
      role: user.role,
      usrname: user.username 
    }

    const token = jwt.sign(tokenUserPayload, config.jwtSecret)

    return {
      user,
      token
    }
  }
}

export default LoginService;