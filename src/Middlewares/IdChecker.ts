import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

class IdChecker {
  public static checkIdFormat(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (!isValidObjectId(req.params.id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    next();
  }
}

export default IdChecker;