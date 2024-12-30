import { useState } from 'react';
import { NewMovie } from '../types';

interface NewMovieFormProps {
  onAddNewMovie: (movie: NewMovie) => Promise<boolean>;
}

const NewMovieForm = ({ onAddNewMovie }: NewMovieFormProps) => {
  const [title, setTitle] = useState<string>('');
  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const success = await onAddNewMovie({ title });
    if (success) {
      setTitle('');
    }
  };

  return (
    <form onSubmit={submit}>
      <h3>Add new movie</h3>
      <label>title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewMovieForm;
