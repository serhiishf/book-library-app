import * as actionTypes from './actionTypes';
import * as dataTypes from '../../types/data';
import { ActionPayload } from '../types';

const initialState: dataTypes.BookType[] = [];

const booksReducer = (
  state = initialState,
  action: ActionPayload<dataTypes.BookType> | ActionPayload<void>
): dataTypes.BookType[] => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return action.payload ? [...state, action.payload] : state;
    default:
      return state;
  }
};

export default booksReducer;
