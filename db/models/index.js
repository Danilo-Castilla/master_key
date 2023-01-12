import { UserSchema, User } from './user.model.js';
import { CustomerSchema, Customer } from './customer.model.js';

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
}

export default setupModels;