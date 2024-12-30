import { Movie } from '../../types';
import MovieListing from './MovieListing';

interface MovieListProps {
  movies: Movie[];
  onDelete: (movie: Movie) => void;
}

const MovieList = ({ movies, onDelete }: MovieListProps) => {
  return (
    <ul>
      {movies && movies.length > 0 ? (
        <div>
          {movies.map((movie, i) => (
            <li key={i}>
              <MovieListing movie={movie} onDelete={onDelete} />
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
