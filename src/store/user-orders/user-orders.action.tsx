import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { OrderItem } from '../order/order.types';
import { USER_ORDERS_ACTION_TYPES } from './user-orders.types';

export type FetchUserOrdersStart = ActionWithPayload<
  USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_START,
  string
>;
export const fetchUserOrdersStart = withMatcher(
  (userId: string): FetchUserOrdersStart =>
    createAction(USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_START, userId)
);
export type FetchUserOrdersSuccess = ActionWithPayload<
  USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_SUCCESS,
  OrderItem[]
>;
export const fetchUserOrdersSuccess = withMatcher(
  (ordersArray: OrderItem[]): FetchUserOrdersSuccess =>
    createAction(USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_SUCCESS, ordersArray)
);
export type FetchUserOrdersFailed = ActionWithPayload<
  USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_FAILED,
  Error
>;
export const fetchUserOrdersFailed = withMatcher(
  (error: Error): FetchUserOrdersFailed =>
    createAction(USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_FAILED, error)
);
