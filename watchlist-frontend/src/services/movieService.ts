import axios from 'axios';
import { Movie } from '../types';

const baseUrl = '/api/movies';

export const getAllMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addMovie = async (object: Movie): Promise<Movie> => {
  const response = await axios.post(baseUrl, object);
  return response.data;
};
