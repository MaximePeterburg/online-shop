import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { PRODUCT_ACTION_TYPES } from './product.types';

export type FetchProductByIdStart = ActionWithPayload<
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_START,
  number
>;
export type FetchProductByIdSuccess = ActionWithPayload<
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_SUCCESS,
  CategoryItem
>;
export type FetchProductByIdFailed = ActionWithPayload<
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_FAILED,
  Error
>;
export const fetchProductByIdStart = withMatcher(
  (id: number): FetchProductByIdStart =>
    createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_START, id)
);
export const fetchProductByIdSuccess = withMatcher(
  (product: CategoryItem): FetchProductByIdSuccess =>
    createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_SUCCESS, product)
);
export const fetchProductByIdFailed = withMatcher(
  (error: Error): FetchProductByIdFailed =>
    createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_FAILED, error)
);
