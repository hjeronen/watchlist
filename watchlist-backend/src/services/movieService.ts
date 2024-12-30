import { data } from '../data';
import { Movie, NewMovie } from '../types';
import { v4 as uuid } from 'uuid';

let movies: Movie[] = data;

const getAllMovies = (): Movie[] => {
  return movies;
};

const addMovie = (movie: NewMovie): Movie => {
  const newMovie: Movie = { ...movie, id: uuid() };
  movies.push(newMovie);
  return newMovie;
};

const deleteMovie = (id: string) => {
  movies = movies.filter((movie) => movie.id != id);
};

export default {
  getAllMovies,
  addMovie,
  deleteMovie,
};
