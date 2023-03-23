import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import ErrorWithStatus from '../Utils/ErrorWithStatus';

export default class MotorcycleService {
  private motorcycleODM: MotorcycleODM;

  constructor(motorcycleODM: MotorcycleODM) {
    this.motorcycleODM = motorcycleODM;
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  private mapMotorcycleDomains(motorcycles: IMotorcycle[]) {
    return motorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycles = await this.motorcycleODM.findAll();
    return this.mapMotorcycleDomains(allMotorcycles);
  }

  public async findById(id: string) {
    const motorcycle = await this.motorcycleODM.findById(id);
    if (!motorcycle.length || !motorcycle) throw new ErrorWithStatus('Motorcycle not found', 404);
    return this.createMotorcycleDomain(motorcycle[0]);
  }

  public async update(id: string, updateBody: IMotorcycle) {
    const updatedCycle = await this.motorcycleODM.update(id, updateBody);
    if (!updatedCycle.matchedCount) throw new ErrorWithStatus('Motorcycle not found', 404);
    const motorcycle = await this.motorcycleODM.findById(id);
    const singleMotorcycle = motorcycle[0];
    return this.createMotorcycleDomain(singleMotorcycle);
  }
}