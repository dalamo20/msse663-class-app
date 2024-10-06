import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

// console.log('Database connection credentials before Sequelize init:', {
//   database: process.env.MYSQL_DATABASE,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   host: process.env.MYSQL_HOST
// });

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE as string,  
  process.env.MYSQL_USER as string,     
  process.env.MYSQL_PASSWORD as string, 
  {
    host: process.env.MYSQL_HOST as string, 
    dialect: 'mysql',
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); 
  }
};
