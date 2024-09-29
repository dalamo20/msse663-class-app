import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { PizzaService } from './src/pizzas.service';
import { sequelize, connectDB } from './database'; 
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

console.log("Environment variables:", {
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_HOST: process.env.MYSQL_HOST
});

if (!process.env.MYSQL_USER || !process.env.MYSQL_DATABASE) {
  console.error("Environment variables are not loaded correctly.");
} else {
  console.log("Environment variables loaded successfully.");
}

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

sequelize.sync({ force: true }).then(() => {
  console.log('Models synchronized with the database.');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const pizzaService = new PizzaService();

app.post('/api/pizzas', pizzaService.createPizza);
app.get('/api/pizzas/presets', pizzaService.getPizzaPresets);
app.get('/api/pizzas/presets/:id', pizzaService.getPizzaPresets);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
