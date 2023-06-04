import { AnyAction } from 'redux';
import { fetchCategoriesAsync } from '../categories/category.saga';
import { CategoryItem } from '../categories/category.types';
import {
  fetchProductFailed,
  fetchProductStart,
  fetchProductSuccess
} from './product.action';

export type ProductState = {
  readonly product: CategoryItem;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const PRODUCT_INITIAL_STATE: ProductState = {
  product: { id: 0, name: '', price: 0, imageUrl: '' },
  isLoading: false,
  error: null
};
export const productReducer = (
  state = PRODUCT_INITIAL_STATE,
  action: AnyAction
): ProductState => {
  if (fetchProductStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchProductSuccess.match(action)) {
    return { ...state, product: action.payload, isLoading: false };
  }
  if (fetchProductFailed.match(action)) {
    return { ...state, error: action.payload };
  }
  return { ...state };
};
