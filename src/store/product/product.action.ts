import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { PRODUCT_ACTION_TYPES } from './product.types';

export type FetchProductStart = ActionWithPayload<
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START,
  number
>;
export type FetchProductSuccess = ActionWithPayload<
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS,
  CategoryItem
>;
export type FetchProductFailed = ActionWithPayload<
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED,
  Error
>;
export const fetchProductStart = withMatcher(
  (id: number): FetchProductStart =>
    createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START, id)
);
export const fetchProductSuccess = withMatcher(
  (product: CategoryItem): FetchProductSuccess =>
    createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, product)
);
export const fetchProductFailed = withMatcher(
  (error: Error): FetchProductFailed =>
    createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, error)
);
