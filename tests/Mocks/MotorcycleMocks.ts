import IMotorcycle from '../../src/Interfaces/IMotorcycle';

export const validMotorcycle: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1983,
  color: 'Red',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const validMotorcycleWithStatus: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1983,
  color: 'Red',
  status: true,
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const updatedMotorcycle: IMotorcycle = {
  model: 'Honda CG Titan 150',
  year: 2020,
  color: 'Black',
  status: true,
  buyValue: 8.200,
  category: 'Street',
  engineCapacity: 150,
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
