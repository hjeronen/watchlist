import Form from 'react-bootstrap/esm/Form';

interface NewMovieFormProps {
  title: string;
  setTitle: (title: string) => void;
}

const NewMovieForm = ({ title, setTitle }: NewMovieFormProps) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Title</Form.Label>
      <Form.Control
        required
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="form-control"
        placeholder="What to watch..."
      />
    </Form.Group>
  );
};

export default NewMovieForm;
