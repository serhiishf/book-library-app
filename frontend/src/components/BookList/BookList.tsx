import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import clsx from 'clsx';
import styles from './BookList.module.scss';

const BookList = () => {
  const books = useSelector((state: RootState) => state?.books);
  return (
    <div className={clsx(styles['app-block'], styles['book-list'])}>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div className={clsx(styles['book-info'])}>
                {index + 1}. {book.title} by {book.author}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
