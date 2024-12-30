import express, { type Request, Response } from 'express';
import movieService from '../services/movieService';
import type { Movie, NewMovie } from '../types';
import {
  errorMiddleware,
  movieParser,
  newMovieParser,
} from '../utils/middleware';

const router = express.Router();

router.get('/', (_req: Request, res: Response<Movie[]>) => {
  res.json(movieService.getAllMovies());
});

router.post(
  '/',
  newMovieParser,
  (req: Request<unknown, unknown, NewMovie>, res: Response<Movie>) => {
    const addedMovie: Movie = movieService.addMovie(req.body);
    res.json(addedMovie);
  }
);

router.delete(
  '/',
  movieParser,
  (req: Request<unknown, unknown, Movie>, res: Response) => {
    movieService.deleteMovie(req.body.id);
    res.status(200);
  }
);

router.use(errorMiddleware);

export default router;
