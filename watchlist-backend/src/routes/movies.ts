import express from 'express';
import movieService from '../services/movieService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(movieService.getAllMovies());
});

router.post('/', (req, res) => {
  const addedMovie = movieService.addMovie(req.body);
  res.send(addedMovie);
});

export default router;
