import express from 'express';
import movieService from '../services/movieService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(movieService.getAllMovies());
});

router.post('/', (req, res) => {
  const addedMovie = movieService.addMovie(req.body);
  res.json(addedMovie);
});

export default router;
