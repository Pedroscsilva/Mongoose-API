import ICar from '../../src/Interfaces/ICar';

const UNO_DA_ESCADA = 'Uno da Escada';

export const validCar: ICar = {
  model: UNO_DA_ESCADA,
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const validCarWithId: ICar = {
  model: UNO_DA_ESCADA,
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
  status: false,
  id: '6348513f34c397abcad040b2',
};

export const toUpdateValidCar: ICar = {
  model: UNO_DA_ESCADA,
  year: 1970,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const updatedValidCarWithId: ICar = {
  model: UNO_DA_ESCADA,
  year: 1970,
  color: 'Red',
  status: false,
  buyValue: 1500,
  id: '6348513f34c397abcad040b2',
  doorsQty: 2,
  seatsQty: 2,
};

export const carsArray: ICar[] = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
    id: '6348513f34c397abcad040b2',
  },
  {
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
    status: true,
    id: '6348513f34c397abcad040b3',
  },
];