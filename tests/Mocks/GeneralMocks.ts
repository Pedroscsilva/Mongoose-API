import { Types } from 'mongoose';

export const successfulUpdate = { 
  matchedCount: 1, 
  acknowledged: true, 
  modifiedCount: 1, 
  upsertedCount: 0,
  upsertedId: '6348513f34c397abcad040b2' as unknown as Types.ObjectId,
};

export const unsuccessfulUpdate = {
  matchedCount: 0,
  acknowledged: true,
  modifiedCount: 0,
  upsertedCount: 0,
  upsertedId: '2148513f34c397abcad040b1' as unknown as Types.ObjectId,
};
