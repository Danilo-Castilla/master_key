import { sequelize } from '../db/sequelize.js'
const { models } = sequelize;
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';

class UserService {
  constructor() { }

  async find() {
    try {
      const users = await models.User.findAll();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id) {
    try {
      const userFound = await models.User.findByPk(id);
      return userFound;
    } catch (error) {
      console.error(error);
    }
  }

  async findByUser(user) {
    try {
      const userFound = await models.User.findOne({
        where: {
          username: user
        }
      })
      return userFound;
    } catch (error) {
      console.error(error)
    }
  }

  async create(data) {
    try {
      const hash = await bcrypt.hash(data.password, 10);
      const newUser = models.User.create({
        ...data,
        password: hash
      });
      return newUser;
    } catch (error) {
      //throw boom.badRequest("mi error generado")
      console.error(error);
    }
  }

  updatePatch(id, patch) {

  }

  update(id) {

  }

  delete(id) {

  }
}

export default UserService;