import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  readonly model: Model<T>;
  private schema: Schema<T>;

  constructor(schema: Schema<T>, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<T[]> {
    return this.model.find({ _id: id });
  }

  public async update(id: string, updateBody: Partial<T>) {
    return this.model.updateOne({ _id: id }, updateBody);
  } 
}

export default AbstractODM;