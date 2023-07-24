import { AnyAction } from 'redux';
import {
  fetchAllOrdersFailed,
  fetchAllOrdersStart,
  fetchAllOrdersSuccess,
  fetchUserOrdersFailed,
  fetchUserOrdersStart,
  fetchUserOrdersSuccess
} from './user-orders.action';
import { UserOrderItem } from './user-orders.types';

export type UserOrdersState = {
  readonly userOrders: UserOrderItem[];
  readonly adminOrders: UserOrderItem[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const USER_ORDERS_INITAIL_STATE: UserOrdersState = {
  userOrders: [],
  adminOrders: [],
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
  if (fetchAllOrdersStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchAllOrdersSuccess.match(action)) {
    return { ...state, isLoading: false, adminOrders: action.payload };
  }
  if (fetchAllOrdersFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};
