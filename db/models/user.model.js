import { Model, DataTypes, Sequelize } from 'sequelize';
const USER_TABLE = 'user'

export const UserSchema = {
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'user_id',
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  role: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

export class User extends Model {
  static config (sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}