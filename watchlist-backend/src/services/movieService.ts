import { movies } from '../data';
import { Movie } from '../types';

const getAllMovies = (): Movie[] => {
  return movies;
};

const addMovie = (movie: Movie): Movie => {
  movies.push(movie);
  return movie;
};

export default {
  getAllMovies,
  addMovie,
};
