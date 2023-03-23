import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';

export default class VehicleFactory {
  public static create(vehicle: unknown, type: 'Car' | 'Motorcycle'): Car | Motorcycle {
    switch (type) {
      case 'Car':
        return new Car(vehicle as ICar);
      case 'Motorcycle':
        return new Motorcycle(vehicle as IMotorcycles);
      default:
        throw new Error('Unknown error');
    }
  }
}