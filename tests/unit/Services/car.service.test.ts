import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { validCar, 
  validCarWithId, 
  carsArray, 
  toUpdateValidCar, 
  updatedValidCarWithId } from '../../Mocks/CarMocks';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';
import { successfulUpdate, unsuccessfulUpdate } from '../../Mocks/GeneralMocks';

const service = new CarService(new CarODM());

describe('Tests suites for CarService', function () {
  describe('Tests suites for create funciton', function () {
    it('Should create a car with success when requested', async function () {
      sinon.stub(Model, 'create').resolves(validCarWithId);

      const result = await service.create(validCar);
      expect(result).to.be.deep.equal(validCarWithId);
    });
  });

  describe('Tests suites for findAll function', function () {
    it('Should return all cars when requested', async function () {
      sinon.stub(Model, 'find').resolves(carsArray);

      const result = await service.findAll();
      expect(result).to.be.deep.equal(carsArray);
    });
  });

  describe('Tests suites for findById function', function () {
    it('Should return a car with valid ID', async function () {
      sinon.stub(Model, 'find').resolves([validCarWithId]);

      const result = await service.findById('6348513f34c397abcad040b2');
      expect(result).to.be.deep.equal(validCarWithId);
    });

    it('Should throw an error when an invalid ID is passed', async function () {
      sinon.stub(Model, 'find').resolves([]);
      try {
        await service.findById('6348513f34c397abcad040b5');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });

  describe('Tests suites for update function', function () {
    it('Should return the updated car when the id matches a value', async function () {
      sinon.stub(Model, 'updateOne').resolves(successfulUpdate);

      sinon.stub(Model, 'find').resolves([updatedValidCarWithId]);

      const result = await service.update('6348513f34c397abcad040b2', toUpdateValidCar);
      expect(result).to.be.deep.equal(updatedValidCarWithId);
    });

    it('Should throw an error when the id doesn\'t match any character', async function () {
      sinon.stub(Model, 'updateOne').resolves(unsuccessfulUpdate);

      try {
        await service.update('2148513f34c397abcad040b1', toUpdateValidCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
