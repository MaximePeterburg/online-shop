import { AnyAction } from 'redux';
import { CategoryItem } from '../categories/category.types';
import {
  fetchSearchedProductsFailed,
  fetchSearchedProductsStart,
  fetchSearchedProductsSuccess
} from './search.actions';

export type SearchState = {
  readonly searchItems: CategoryItem[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const SEARCH_INITAIL_STATE: SearchState = {
  searchItems: [],
  isLoading: false,
  error: null
};
export const searchReducer = (
  state = SEARCH_INITAIL_STATE,
  action: AnyAction
): SearchState => {
  if (fetchSearchedProductsStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchSearchedProductsSuccess.match(action)) {
    return { ...state, searchItems: action.payload, isLoading: false };
  }
  if (fetchSearchedProductsFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};
