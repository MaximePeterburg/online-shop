import { AnyAction } from 'redux';
import { CategoryItem } from '../categories/category.types';
import {
  fetchProductByIdFailed,
  fetchProductByIdStart,
  fetchProductByIdSuccess
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
  if (fetchProductByIdStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchProductByIdSuccess.match(action)) {
    return { ...state, product: action.payload, isLoading: false };
  }
  if (fetchProductByIdFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return { ...state };
};
