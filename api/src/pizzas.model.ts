import { DataTypes } from 'sequelize';
import { sequelize } from '../database'; 

const Pizzas = sequelize.define('Pizza', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  toppings: {
    type: DataTypes.JSON, 
    allowNull: true,
  },
}, {
  tableName: 'pizzas',
  timestamps: true, 
});

export default Pizzas;
