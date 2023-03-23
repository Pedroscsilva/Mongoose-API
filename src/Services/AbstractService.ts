import AbstractODM from '../Models/AbstractODM';
import ErrorWithStatus from '../Utils/ErrorWithStatus';
import VehicleFactory from '../Utils/VehicleFactory';

export default class AbstratctService<I> {
  private ODM: AbstractODM<I>;
  private serviceType: 'Car' | 'Motorcycle';

  constructor(ODM: AbstractODM<I>, serviceType: 'Car' | 'Motorcycle') {
    this.ODM = ODM;
    this.serviceType = serviceType;
  }

  private createNewDomain(vehicle: I) {
    return VehicleFactory.create(vehicle, this.serviceType);
  }

  private mapDomains(vehicles: I[]) {
    return vehicles.map((vehicle) => VehicleFactory.create(vehicle, this.serviceType));
  }

  public async create(vehicle: I) {
    const newVehicle = await this.ODM.create(vehicle);
    return this.createNewDomain(newVehicle);
  }

  public async findAll() {
    const allVehicles = await this.ODM.findAll();
    return this.mapDomains(allVehicles);
  }

  public async findById(id: string) {
    const vehicle = await this.ODM.findById(id);
    if (!vehicle.length || !vehicle) {
      throw new ErrorWithStatus(`${this.serviceType} not found`, 404);
    }
    return this.createNewDomain(vehicle[0]);
  }

  public async update(id: string, updateBody: I) {
    const updatedCycle = await this.ODM.update(id, updateBody);
    if (!updatedCycle.matchedCount) throw new ErrorWithStatus(`${this.serviceType} not found`, 404);
    const vehicle = await this.ODM.findById(id);
    const singleVehicle = vehicle[0];
    return this.createNewDomain(singleVehicle);
  }
}