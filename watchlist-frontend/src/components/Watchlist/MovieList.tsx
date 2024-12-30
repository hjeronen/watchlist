import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Movie } from '../../types';
import MovieListing from './MovieListing';

interface MovieListProps {
  movies: Movie[];
  onDelete: (movie: Movie) => void;
  toggleWatched: (movie: Movie) => void;
}

const MovieList = ({ movies, onDelete, toggleWatched }: MovieListProps) => {
  return (
    <ListGroup>
      {movies && movies.length > 0 ? (
        movies.map((movie, i) => (
          <MovieListing
            key={i}
            movie={movie}
            onDelete={onDelete}
            toggleWatched={toggleWatched}
          />
        ))
      ) : (
        <div>No movies added.</div>
      )}
    </ListGroup>
  );
};

export default MovieList;
