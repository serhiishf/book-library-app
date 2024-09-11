import clsx from 'clsx';
import styles from './BookForm.module.scss';
import { useState } from 'react';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && author) {
      setTitle('');
      setAuthor('');
      //TODO dispatch action
    }
  };

  return (
    <div className={clsx(styles['app-block'], styles['book-form'])}>
      <h2>Add a new book</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default BookForm;
