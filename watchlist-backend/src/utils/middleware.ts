import { type NextFunction, Request, Response } from 'express';
import { movieSchema, newMovieSchema } from './schemas';
import { z } from 'zod';

export const newMovieParser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    newMovieSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

export const movieParser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    movieSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};
