import { NextFunction, Request, Response } from 'express';
import ErrorWithStatus from '../Utils/ErrorWithStatus';

class ErrorHandler {
  public static handle(
    error: ErrorWithStatus,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (!error.status) {
      return res.status(500).json({ message: error.message });
    }
    res.status(error.status).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;