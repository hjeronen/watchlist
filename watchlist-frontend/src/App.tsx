import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Notification from './components/Notification';
import { addMovie, getAllMovies } from './services/movieService';
import type { Movie, NotificationType, NotificationStyle } from './types';
import NewMovieForm from './components/NewMovieForm';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [notification, setNotification] = useState<
    NotificationType | undefined
  >(undefined);

  useEffect(() => {
    getAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data);
          showNotification('An error occurred when fetching movies', 'error');
        } else {
          console.error(error);
        }
      });
  }, []);

  const showNotification = (message: string, style: NotificationStyle) => {
    setNotification({ message, style });
    setTimeout(() => {
      setNotification(undefined);
    }, 4000);
  };

  const addNewMovie = async (movie: Movie) => {
    try {
      const addedMovie = await addMovie(movie);
      setMovies(movies.concat(addedMovie));
      return true;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
        showNotification('An error occurred when adding new movie', 'error');
      } else {
        console.error(error);
      }
      return false;
    }
  };

  return (
    <div>
      <h1>WatchList</h1>
      <Notification
        message={notification?.message}
        style={notification?.style}
      />
      <NewMovieForm onAddNewMovie={addNewMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
