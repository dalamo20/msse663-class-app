import { Handler } from 'express';
import { PizzaEntity } from '../lib/api-interfaces';
import Pizzas from './pizzas.model';

export class PizzaService {
  // Get all pizza presets
  getPizzaPresets: Handler = async (req, res) => {
    try {
      const pizzas = await Pizzas.findAll();
      res.send({
        msg: 'Found pizza presets',
        pizzas: pizzas,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  // Get pizza by ID
  getPizzaPreset: Handler = async (req, res) => {
    try {
      const pizza = await Pizzas.findByPk(req.params.id);
      if (!pizza) {
        res.status(404).send({ msg: 'Pizza not found' }); 
        return;
      }
      res.send({
        msg: 'Found pizza preset',
        pizza: pizza,
      });
    } catch (err) {
      res.status(500).send(err); 
    }
  };

  // Create new pizza
  createPizza: Handler = async (req, res) => {
    try {
      const { pizzas } = req.body;
      if (!pizzas) {
        res.status(400).send({ error: 'No pizza data provided' });
        return;
      }

      // Create and save pizzas
      const createdPizzas = await Pizzas.bulkCreate(pizzas);

      res.status(201).send({
        message: 'Pizzas created successfully',
        pizzas: createdPizzas,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Failed to create pizzas' });
    }
  };
}
