import * as actionTypes from './actionTypes';
import * as dataTypes from '../../types/data';
import { ActionType } from '../../types/actionsRedux';

const initialState: dataTypes.BookType[] = [];

const booksReducer = (
  state = initialState,
  action: ActionType<dataTypes.BookType> | ActionType
) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
