import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message } = err;

  res.status(status).json({ error: message });
}