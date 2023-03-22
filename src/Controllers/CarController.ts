import { NextFunction, Request, Response } from "express";
// import ICar from "../Interfaces/ICar";
import CarService from "../Services/CarService";

export default class CarController {
  private service: CarService;

  constructor(service: CarService) {
    this.service = service;
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newCar = await this.service.create(req.body);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
}