import { AnyAction } from 'redux';
import { OrderDetails } from '../order/order.types';
import {
  fetchUserOrdersFailed,
  fetchUserOrdersStart,
  fetchUserOrdersSuccess
} from './user-orders.action';

export type UserOrdersState = {
  readonly userOrders: OrderDetails[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const USER_ORDERS_INITAIL_STATE: UserOrdersState = {
  userOrders: [],
  isLoading: false,
  error: null
};

export const userOrdersReducer = (
  state = USER_ORDERS_INITAIL_STATE,
  action: AnyAction
): UserOrdersState => {
  if (fetchUserOrdersStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchUserOrdersSuccess.match(action)) {
    return { ...state, isLoading: false, userOrders: action.payload };
  }
  if (fetchUserOrdersFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};
