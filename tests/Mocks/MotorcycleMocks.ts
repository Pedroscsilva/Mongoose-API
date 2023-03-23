import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const CG_TITAN = 'Honda CG Titan 125';

export const validMotorcycle: IMotorcycle = {
  model: CG_TITAN,
  year: 1983,
  color: 'Red',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const validMotorcycleWithId: IMotorcycle = {
  model: CG_TITAN,
  year: 1983,
  color: 'Red',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
  status: false,
  id: '6348513f34c397abcad040b2',
};

export const toUpdateValidMotorcycle: IMotorcycle = {
  model: CG_TITAN,
  year: 1983,
  color: 'Black',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const updatedValidMotorcycleWithId: IMotorcycle = {
  model: CG_TITAN,
  year: 1983,
  color: 'Red',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
  status: false,
  id: '6348513f34c397abcad040b2',
};

export const motorcyclesArray: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];
