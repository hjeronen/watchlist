import { z } from 'zod';
import { movieSchema, newMovieSchema } from './utils/schemas';

export type Movie = z.infer<typeof movieSchema>;

export type NewMovie = z.infer<typeof newMovieSchema>;
