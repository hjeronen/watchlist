import express from 'express';
import movieService from '../services/movieService';
import { Movie } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(movieService.getAllMovies());
});

router.post('/', (req, res) => {
  const addedMovie = movieService.addMovie(req.body as Movie);
  res.json(addedMovie);
});

export default router;
