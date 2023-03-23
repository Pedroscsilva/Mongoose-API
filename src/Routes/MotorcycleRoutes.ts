import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import IdChecker from '../Middlewares/IdChecker';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleService from '../Services/MotorcycleService';

const routes = Router();

const model = new MotorcycleODM();
const service = new MotorcycleService(model);
const controller = new MotorcycleController(service);

routes.post(
  '/motorcycles',
  (req, res, next) => controller.create(req, res, next),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => IdChecker.checkIdFormat(req, res, next),
  (req, res, next) => controller.findById(req, res, next),
);

routes.get(
  '/motorcycles',
  (req, res, next) => controller.findAll(req, res, next),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => IdChecker.checkIdFormat(req, res, next),
  (req, res, next) => controller.update(req, res, next),
);

export default routes;