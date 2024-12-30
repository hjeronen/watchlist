import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Movie } from '../../types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

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
    <ListGroup.Item>
      <Container>
        <Row>
          <Col xs={8} className="list-text">
            {movie.title}
          </Col>
          <Col className="d-block flex-nowrap justify-content-end d-sm-flex">
            <Button
              variant="outline-info"
              className="list-button"
              onClick={() => toggleWatched(movie)}
            >
              {movie.watched ? 'Unwatch' : 'Watched'}
            </Button>
            <Button
              variant="outline-danger"
              className="list-button"
              onClick={() => onDelete(movie)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default MovieListing;
