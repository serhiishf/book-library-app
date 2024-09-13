import * as actionTypes from './actionTypes';
import * as dataTypes from '../../types/data';
import { ActionType } from '../../types/actionsRedux';

export const addBook = (newBook: dataTypes.BookType): ActionType<dataTypes.BookType> => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
};
