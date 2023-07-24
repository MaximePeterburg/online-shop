import { createSelector } from 'reselect';
import { RootState } from '../store';
import { OrderState } from './order.reducer';

export const selectOrderReducer = (state: RootState): OrderState => state.order;
export const selectOrderItem = createSelector(
  [selectOrderReducer],
  (order) => order.order
);
export const selectContactInfo = createSelector(
  [selectOrderItem],
  (order) => order.contactInfo
);
