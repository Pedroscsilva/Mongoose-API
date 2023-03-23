import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service: MotorcycleService;

  constructor(service: MotorcycleService) {
    this.service = service;
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newMotorcycle = await this.service.create(req.body);
      return res.status(201).json(newMotorcycle);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const allMotorcycles = await this.service.findAll();
      return res.status(200).json(allMotorcycles);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const allMotorcycles = await this.service.findById(req.params.id);
      return res.status(200).json(allMotorcycles);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedMotorcycles = await this.service.update(req.params.id, req.body);
      return res.status(200).json(updatedMotorcycles);
    } catch (error) {
      next(error);
    }
  }
}