import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ProductState } from './product.reducer';

export const selectProductReducer = (state: RootState): ProductState => state.product;
export const selectProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.product
);