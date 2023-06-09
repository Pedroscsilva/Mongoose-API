import { Router } from 'express';
import CarController from '../Controllers/CarController';
import IdChecker from '../Middlewares/IdChecker';
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

routes.get(
  '/cars/:id',
  (req, res, next) => IdChecker.checkIdFormat(req, res, next),
  (req, res, next) => controller.findById(req, res, next),
);

routes.get(
  '/cars',
  (req, res, next) => controller.findAll(req, res, next),
);

routes.put(
  '/cars/:id',
  (req, res, next) => IdChecker.checkIdFormat(req, res, next),
  (req, res, next) => controller.update(req, res, next),
);

export default routes;