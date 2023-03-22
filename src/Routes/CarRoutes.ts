import { Router } from 'express';
import CarController from '../Controllers/CarController';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

const routes = Router();

const model = new CarODM();
const service = new CarService(model);
const controller = new CarController(service);

routes.post(
  '/cars',
  (req, res, next) => controller.create(req, res, next),
);

export default routes;