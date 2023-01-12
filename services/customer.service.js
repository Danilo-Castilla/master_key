import { sequelize } from '../db/sequelize.js'
const { models } = sequelize;

class CustomerService {
  constructor() { }

  async find() {
    try {
      const customers = await models.Customer.findAll()
      return customers
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id) {
    try {
      const customerFound = await models.Customer.findByPk(id);
      return customerFound;
    } catch (error) {
      console.error(error);
    }
  }

  async create(data) {
    try {
      const newCustomer = await models.Customer.create(data)
      return newCustomer;
    } catch (error) {
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

export default CustomerService;