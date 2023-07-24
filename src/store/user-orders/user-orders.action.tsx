import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { USER_ORDERS_ACTION_TYPES, UserOrderItem } from './user-orders.types';

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
  UserOrderItem[]
>;
export const fetchUserOrdersSuccess = withMatcher(
  (ordersArray: UserOrderItem[]): FetchUserOrdersSuccess =>
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
export type FetchAllOrdersStart = Action<USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_START>;
export type FetchAllOrdersSuccess = ActionWithPayload<
  USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_SUCCESS,
  UserOrderItem[]
>;
export type FetchAllOrdersFailed = ActionWithPayload<
  USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_FAILED,
  Error
>;
export const fetchAllOrdersStart = withMatcher(
  (): FetchAllOrdersStart => createAction(USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_START)
);
export const fetchAllOrdersSuccess = withMatcher(
  (orders: UserOrderItem[]): FetchAllOrdersSuccess =>
    createAction(USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_SUCCESS, orders)
);
export const fetchAllOrdersFailed = withMatcher(
  (error: Error): FetchAllOrdersFailed =>
    createAction(USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_FAILED, error)
);
