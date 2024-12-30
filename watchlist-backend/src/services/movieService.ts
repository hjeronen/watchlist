import { movies } from '../data';
import { Movie, NewMovie } from '../types';
import { v4 as uuid } from 'uuid';

const getAllMovies = (): Movie[] => {
  return movies;
};

const addMovie = (movie: NewMovie): Movie => {
  const newMovie: Movie = { ...movie, id: uuid() };
  movies.push(newMovie);
  return newMovie;
};

const deleteMovie = (id: string) => {
  // TODO: add deleting movies when database is set up
  console.log(`Deleting ${id}`);
};

export default {
  getAllMovies,
  addMovie,
  deleteMovie,
};
