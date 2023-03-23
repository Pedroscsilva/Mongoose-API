import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AbstratctService from './AbstractService';

export default class CarService extends AbstratctService<ICar> {
  constructor(carODM: CarODM) {
    super(carODM, 'Car');
  }
}
