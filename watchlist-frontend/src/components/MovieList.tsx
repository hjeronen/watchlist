import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {movies && movies.length > 0 ? (
          <div>
            {movies.map((movie, i) => (
              <li key={i}>{movie.title}</li>
            ))}
          </div>
        ) : (
          <div>No movies added.</div>
        )}
      </ul>
    </div>
  );
};

export default MovieList;
