import axios from 'axios';
import { NewMovie, Movie } from '../types';

const baseUrl = '/api/movies';

export const getAllMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addMovie = async (object: NewMovie): Promise<Movie> => {
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export const deleteMovie = async (movie: Movie): Promise<number> => {
  const response = await axios.delete(`${baseUrl}/${movie.id}`);
  return response.status;
};

export const updateMovie = async (movie: Movie): Promise<number> => {
  const response = await axios.put(`${baseUrl}/${movie.id}`, movie);
  return response.status;
};
