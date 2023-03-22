import { NextFunction, Request, Response } from 'express';

class IdChecker {
  public static checkIdFormat(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const mongoRegex = /^[a-f\d]{24}$/i;
    if (!mongoRegex.test(req.params.id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    next();
  }
}

export default IdChecker;