import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import Notification from '../../components/Notification';
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from '../../services/movieService';
import type {
  NewMovie,
  Movie,
  NotificationType,
  NotificationStyle,
} from '../../types';
import NewMovieForm from '../../components/NewMovieForm';
import axios from 'axios';

const Watchlist = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [notification, setNotification] = useState<
    NotificationType | undefined
  >(undefined);

  const loadMovies = async () => {
    try {
      const fetchedMovies = await getAllMovies();
      setMovies(fetchedMovies);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
        showNotification('An error occurred when fetching movies', 'error');
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const showNotification = (message: string, style: NotificationStyle) => {
    setNotification({ message, style });
    setTimeout(() => {
      setNotification(undefined);
    }, 4000);
  };

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      showNotification(`An error occurred: ${error.message}`, 'error');
    } else {
      console.error(error);
    }
  };

  const onAddMovie = async (movie: NewMovie) => {
    try {
      const addedMovie = await addMovie(movie);
      setMovies(movies.concat(addedMovie));
      return true;
    } catch (error: unknown) {
      handleError(error);
      return false;
    }
  };

  const onDeleteMovie = async (movie: Movie) => {
    try {
      const status = await deleteMovie(movie);
      if (status !== 200) {
        showNotification(`Deleting ${movie.title} failed`, 'error');
      } else {
        await loadMovies();
      }
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const toggleWatched = async (movie: Movie) => {
    try {
      const status = await updateMovie({ ...movie, watched: !movie.watched });
      if (status !== 201) {
        showNotification(`Updating ${movie.title} failed`, 'error');
      } else {
        await loadMovies();
      }
    } catch (error: unknown) {
      handleError(error);
    }
  };

  return (
    <div>
      <Notification
        message={notification?.message}
        style={notification?.style}
      />
      <h2>Movies</h2>
      <NewMovieForm onAddNewMovie={onAddMovie} />
      <MovieList
        movies={movies}
        onDelete={onDeleteMovie}
        toggleWatched={toggleWatched}
      />
    </div>
  );
};

export default Watchlist;
