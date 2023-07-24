import { createSelector } from 'reselect';
import { RootState } from '../store';
import { UserOrdersState } from './user-orders.reducer';

export const selectUserOrdersReducer = (state: RootState): UserOrdersState =>
  state.userOrders;
export const selectUserOrders = createSelector(
  [selectUserOrdersReducer],
  (userOrdersSlice) => userOrdersSlice.userOrders
);
export const selectAllOrders = createSelector(
  [selectUserOrdersReducer],
  (userOrdersSlice) => userOrdersSlice.adminOrders
);
export const selectUserOrdersIsLoading = createSelector(
  [selectUserOrdersReducer],
  (userOrdersSlice) => userOrdersSlice.isLoading
);
