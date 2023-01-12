import { Model, DataTypes, Sequelize } from 'sequelize';

const CUSTOMER_TABLE = 'customer';

export const CustomerSchema = {
  customerId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'customer_id',
    type: DataTypes.INTEGER
  },
  razonSocial: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'razon_social',
  },
  direccion: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  responsableIt:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'responsable_it',
  },
  ciudad: {
    type: DataTypes.INTEGER,
  },
  ubicacion: {
    type: DataTypes.STRING,
  },
  fechaContrato: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_contrato',
  },
  diagramaRed: {
    type: DataTypes.STRING,
    field: 'diagrama_red',
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

export class Customer extends Model {
  static config (sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}