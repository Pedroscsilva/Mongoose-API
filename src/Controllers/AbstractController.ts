import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import MotorcycleService from '../Services/MotorcycleService';

export default class AbstractController {
  private service: MotorcycleService | CarService;

  constructor(service: MotorcycleService | CarService) {
    this.service = service;
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newVehicle = await this.service.create(req.body);
      return res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const allVehicles = await this.service.findAll();
      return res.status(200).json(allVehicles);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const allVehicles = await this.service.findById(req.params.id);
      return res.status(200).json(allVehicles);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedVehicle = await this.service.update(req.params.id, req.body);
      return res.status(200).json(updatedVehicle);
    } catch (error) {
      next(error);
    }
  }
}