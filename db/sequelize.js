import { Sequelize } from 'sequelize'
import setupModels from './models/index.js';
import { config } from '../config/config.js'

export const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: 'mysql'
});

setupModels(sequelize);
sequelize.sync({ force: false });
