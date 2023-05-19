import { AnyAction } from 'redux';
import { CategoryItem } from '../categories/category.types';
import { setSearchedProducts } from './search.actions';

export type SearchState = {
  readonly searchItems: CategoryItem[];
};
export const SEARCH_INITAIL_STATE: SearchState = {
  searchItems: []
};
export const searchReducer = (
  state = SEARCH_INITAIL_STATE,
  action: AnyAction
): SearchState => {
  if (setSearchedProducts.match(action)) {
    console.log(action.payload);
    return { ...state, searchItems: action.payload };
  }
  return state;
};
