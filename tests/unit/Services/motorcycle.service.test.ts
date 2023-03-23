import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { validMotorcycle, 
  motorcyclesArray, 
  toUpdateValidMotorcycle, 
  updatedValidMotorcycleWithId, 
  validMotorcycleWithId } from '../../Mocks/MotorcycleMocks';
import MotorycleODM from '../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { successfulUpdate, unsuccessfulUpdate } from '../../Mocks/GeneralMocks';

const service = new MotorcycleService(new MotorycleODM());

describe('Tests suites for MotorcycleService', function () {
  describe('Tests suites for create function', function () {
    it('Should create a motorcycle with success when requested', async function () {
      sinon.stub(Model, 'create').resolves(validMotorcycleWithId);

      const result = await service.create(validMotorcycle);
      expect(result).to.be.deep.equal(validMotorcycleWithId);
    });
  });

  describe('Tests suites for findAll function', function () {
    it('Should return all motorcycles when requested', async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesArray);

      const result = await service.findAll();
      expect(result).to.be.deep.equal(motorcyclesArray);
    });
  });

  describe('Tests suites for findById function', function () {
    it('Should return a motorcycle with valid ID', async function () {
      sinon.stub(Model, 'find').resolves([validMotorcycleWithId]);

      const result = await service.findById('6348513f34c397abcad040b2');
      expect(result).to.be.deep.equal(validMotorcycleWithId);
    });

    it('Should throw an error when an invalid ID is passed', async function () {
      sinon.stub(Model, 'find').resolves([]);
      try {
        await service.findById('6348513f34c397abcad040b5');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });
  });

  describe('Tests suites for update function', function () {
    it('Should return the updated motorcycle when the id matches a value', async function () {
      sinon.stub(Model, 'updateOne').resolves(successfulUpdate);

      sinon.stub(Model, 'find').resolves([updatedValidMotorcycleWithId]);

      const result = await service.update('6348513f34c397abcad040b2', toUpdateValidMotorcycle);
      expect(result).to.be.deep.equal(updatedValidMotorcycleWithId);
    });

    it('Should throw an error when the id doesn\'t match any character', async function () {
      sinon.stub(Model, 'updateOne').resolves(unsuccessfulUpdate);

      try {
        await service.update('2148513f34c397abcad040b1', toUpdateValidMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});