import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
import styles from './BookForm.module.scss';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  console.log(dispatch, useDispatch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && author) {
      const book = {
        title,
        author,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
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
