import * as actionTypes from './actionTypes';
import * as dataTypes from '../../types/data';
import { ActionPayload } from '../types';

export const addBook = (newBook: dataTypes.BookType): ActionPayload<dataTypes.BookType> => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
};
