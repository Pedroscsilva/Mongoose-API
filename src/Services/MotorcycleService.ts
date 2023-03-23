import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import AbstractService from './AbstractService';

export default class MotorcycleService extends AbstractService<IMotorcycle> {
  constructor(motorcycleODM: MotorcycleODM) {
    super(motorcycleODM, 'Motorcycle');
  }
}
