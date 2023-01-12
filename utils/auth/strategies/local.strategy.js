import { Strategy } from 'passport-local'
import AuthService from '../../../services/login.service.js'
import boom from '@hapi/boom';

const service = new AuthService();

export const LocalStrategy = new Strategy({
  usernameField: 'user',
  passwordField: 'password'
},
  async (user, pass, done) => {
    try {
      const userFound = await service.getUser(user, pass);
      if(!userFound) {
        done(boom.unauthorized(), false);
      }
      done(null, userFound);
    } catch (error) {
      done(error, false);
    }
  }
)
