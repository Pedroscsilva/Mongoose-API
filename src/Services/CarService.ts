import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorWithStatus from '../Utils/ErrorWithStatus';

export default class CarService {
  private carODM: CarODM;

  constructor(carODM: CarODM) {
    this.carODM = carODM;
  }

  private createCarDomain(car: ICar | null) {
    if (!car) return null;
    return new Car(car);
  }

  private mapCarDomains(cars: ICar[]) {
    return cars.map((car) => new Car(car));
  }

  public async create(car: ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const allCars = await this.carODM.findAll();
    return this.mapCarDomains(allCars);
  }

  public async findById(id: string) {
    const car = await this.carODM.findById(id);
    if (car.length === 0) throw new ErrorWithStatus('Car not found', 404);
    return this.createCarDomain(car[0]);
  }
}