import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import { NewMovie } from '../../types';
import { useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import NewMovieForm from './NewMovieForm';

interface AddMovieModalProps {
  show: boolean;
  onShow: () => void;
  onClose: () => void;
  onAddNewMovie: (movie: NewMovie) => Promise<boolean>;
}

const AddMovieModal = ({
  show,
  onShow,
  onClose,
  onAddNewMovie,
}: AddMovieModalProps) => {
  const [title, setTitle] = useState<string>('');
  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const success = await onAddNewMovie({ title });
    if (success) {
      setTitle('');
      onClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={onShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={onClose}>
        <Form onSubmit={submit}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie to the list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewMovieForm title={title} setTitle={setTitle} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="outline-success" type="submit">
              Add movie
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddMovieModal;
