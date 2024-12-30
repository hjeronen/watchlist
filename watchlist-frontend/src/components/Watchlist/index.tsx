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
import axios from 'axios';
import AddMovieModal from '../AddMovieModal';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Watchlist = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [notification, setNotification] = useState<
    NotificationType | undefined
  >(undefined);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadMovies = async () => {
    try {
      const fetchedMovies = await getAllMovies();
      setMovies(fetchedMovies);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
        showNotification('An error occurred when fetching movies', 'danger');
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
      showNotification(`An error occurred: ${error.message}`, 'danger');
    } else {
      console.error(error);
    }
  };

  const onAddMovie = async (movie: NewMovie) => {
    try {
      const addedMovie = await addMovie(movie);
      showNotification(`Successfully added ${addedMovie.title}`, 'success');
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
        showNotification(`Deleting ${movie.title} failed`, 'danger');
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
        showNotification(`Updating ${movie.title} failed`, 'danger');
      } else {
        await loadMovies();
      }
    } catch (error: unknown) {
      handleError(error);
    }
  };

  return (
    <Container>
      <Row>
        <Notification
          message={notification?.message}
          style={notification?.style}
        />
      </Row>
      <Row>
        <Container className="header-container">
          <Row>
            <Col sm={8}>
              <h2>Movies</h2>
            </Col>
            <Col
              sm={4}
              className="d-block flex-nowrap justify-content-end d-sm-flex"
            >
              <AddMovieModal
                show={show}
                onShow={handleShow}
                onClose={handleClose}
                onAddNewMovie={onAddMovie}
              />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <MovieList
          movies={movies}
          onDelete={onDeleteMovie}
          toggleWatched={toggleWatched}
        />
      </Row>
    </Container>
  );
};

export default Watchlist;
