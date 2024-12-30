import express, { type Request, Response } from 'express';
import movieService from '../services/movieService';
import type { Movie, NewMovie } from '../types';
import { errorMiddleware, newMovieParser } from '../utils/middleware';

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

router.delete('/:id', (req: Request, res: Response) => {
  movieService.deleteMovie(req.params.id);
  res.status(200).send();
});

router.use(errorMiddleware);

export default router;
