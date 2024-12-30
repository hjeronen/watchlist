import { Movie } from '../../types';
import MovieListing from './MovieListing';

interface MovieListProps {
  movies: Movie[];
  onDelete: (movie: Movie) => void;
  toggleWatched: (movie: Movie) => void;
}

const MovieList = ({ movies, onDelete, toggleWatched }: MovieListProps) => {
  return (
    <ul>
      {movies && movies.length > 0 ? (
        <div>
          {movies.map((movie, i) => (
            <li key={i}>
              <MovieListing
                movie={movie}
                onDelete={onDelete}
                toggleWatched={toggleWatched}
              />
            </li>
          ))}
        </div>
      ) : (
        <div>No movies added.</div>
      )}
    </ul>
  );
};

export default MovieList;
