import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { SEARCH_ACTION_TYPES } from './search.types';

export type FetchSearchedProductStart = ActionWithPayload<
  SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_START,
  string
>;
export type FetchSearchedProductsSuccess = ActionWithPayload<
  SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_SUCCESS,
  CategoryItem[]
>;
export type FetchSearchedProductsFailed = ActionWithPayload<
  SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_FAILED,
  Error
>;
export type SetSearchedProducts = ActionWithPayload<
  SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS,
  CategoryItem[]
>;
export const fetchSearchedProductsStart = withMatcher(
  (searchTerm: string): FetchSearchedProductStart =>
    createAction(SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_START, searchTerm)
);
export const fetchSearchedProductsSuccess = withMatcher(
  (searchedProducts: CategoryItem[]): FetchSearchedProductsSuccess =>
    createAction(SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_SUCCESS, searchedProducts)
);
export const fetchSearchedProductsFailed = withMatcher(
  (error: Error): FetchSearchedProductsFailed =>
    createAction(SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_FAILED, error)
);
