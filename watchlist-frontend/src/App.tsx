import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import { addMovie, getAllMovies } from './services/movieService';
import { Movie } from './types';
import NewMovieForm from './components/NewMovieForm';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.log(error?.response?.data));
  }, []);

  const addNewMovie = async (movie: Movie) => {
    try {
      const addedMovie = await addMovie(movie);
      setMovies(movies.concat(addedMovie));
      return true;
    } catch (error: any) {
      return false;
    }
  };

  return (
    <div>
      <h1>WatchList</h1>
      <NewMovieForm onAddNewMovie={addNewMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
