import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AbstractService from './AbstractService';

export default class CarService extends AbstractService<ICar> {
  constructor(carODM: CarODM) {
    super(carODM, 'Car');
  }
}
