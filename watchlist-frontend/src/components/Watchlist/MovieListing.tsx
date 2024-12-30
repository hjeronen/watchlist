import { Movie } from '../../types';

interface MovieListingProps {
  movie: Movie;
  onDelete: (movie: Movie) => void;
}

const MovieListing = ({ movie, onDelete }: MovieListingProps) => {
  return (
    <>
      {movie.title}
      <button onClick={() => onDelete(movie)}>Delete</button>
    </>
  );
};

export default MovieListing;
