import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || 'fallback_db',  
  process.env.MYSQL_USER || 'fallback_user',     
  process.env.MYSQL_PASSWORD || 'fallback_password', 
  {
    host: process.env.MYSQL_HOST || 'fallback_host', 
    dialect: 'mysql',
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
