import { z } from 'zod';

export const newMovieSchema = z.object({
  title: z.string(),
});

export const movieSchema = z.object({
  id: z.string(),
  title: z.string(),
});
