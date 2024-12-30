import { Movie } from '../../types';

interface MovieListingProps {
  movie: Movie;
  onDelete: (movie: Movie) => void;
  toggleWatched: (movie: Movie) => void;
}

const MovieListing = ({
  movie,
  onDelete,
  toggleWatched,
}: MovieListingProps) => {
  return (
    <>
      {movie.title}
      <button onClick={() => toggleWatched(movie)}>
        {movie.watched ? 'Unwatch' : 'Watched'}
      </button>
      <button onClick={() => onDelete(movie)}>Delete</button>
    </>
  );
};

export default MovieListing;
