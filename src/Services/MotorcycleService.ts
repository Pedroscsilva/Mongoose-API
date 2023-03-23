import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import AbstratctService from './AbstractService';

export default class MotorcycleService extends AbstratctService<IMotorcycle> {
  constructor(motorcycleODM: MotorcycleODM) {
    super(motorcycleODM, 'Motorcycle');
  }
}
