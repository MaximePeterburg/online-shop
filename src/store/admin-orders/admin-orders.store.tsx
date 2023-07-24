import { AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { all, call, put, takeLatest } from 'typed-redux-saga';
import { getOrdersFromCollection } from '../../utils/firebase/firebase.utils';
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { RootState } from '../store';
import { UserOrderItem } from '../user-orders/user-orders.types';
export enum ADMIN_ORDERS_ACTION_TYPES {
  FETCH_ADMIN_ORDERS_START = 'admin-orders/FETCH_ADMIN_ORDERS_START',
  FETCH_ADMIN_ORDERS_SUCCESS = 'admin-orders/FETCH_ADMIN_ORDERS_SUCCESS',
  FETCH_ADMIN_ORDERS_FAILED = 'admin-orders/FETCH_ADMIN_ORDERS_FAILED'
}
export type FetchAdminOrdersStart =
  Action<ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_START>;
export type FetchAdminOrdersSuccess = ActionWithPayload<
  ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_SUCCESS,
  UserOrderItem[]
>;
export type FetchAdminOrdersFailed = ActionWithPayload<
  ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_FAILED,
  Error
>;
export const fetchAdminOrdersStart = withMatcher(
  (): FetchAdminOrdersStart =>
    createAction(ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_START)
);
export const fetchAdminOrdersSuccess = withMatcher(
  (orders: UserOrderItem[]): FetchAdminOrdersSuccess =>
    createAction(ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_SUCCESS, orders)
);
export const fetchAdminOrdersFailed = withMatcher(
  (error: Error): FetchAdminOrdersFailed =>
    createAction(ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_FAILED, error)
);
export function* fetchAdminOrdersAsync() {
  try {
    const orders = yield* call(getOrdersFromCollection);
    yield* put(fetchAdminOrdersSuccess(orders));
  } catch (error) {
    yield* put(fetchAdminOrdersFailed(error as Error));
  }
}
export function* onFetchAdminOrders() {
  yield* takeLatest(
    ADMIN_ORDERS_ACTION_TYPES.FETCH_ADMIN_ORDERS_START,
    fetchAdminOrdersAsync
  );
}
export function* adminOrdersSaga() {
  yield* all([call(onFetchAdminOrders)]);
}
export type AdminOrdersState = {
  readonly adminOrders: UserOrderItem[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const USER_ORDERS_INITAIL_STATE: AdminOrdersState = {
  adminOrders: [],
  isLoading: false,
  error: null
};
export const adminOrdersReducer = (
  state = USER_ORDERS_INITAIL_STATE,
  action: AnyAction
): AdminOrdersState => {
  if (fetchAdminOrdersStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchAdminOrdersSuccess.match(action)) {
    return { ...state, isLoading: false, adminOrders: action.payload };
  }
  if (fetchAdminOrdersFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};
export const selectAdminOrdersReducer = (state: RootState): AdminOrdersState =>
  state.adminOrders;
export const selectAdminOrders = createSelector(
  [selectAdminOrdersReducer],
  (adminOrdersSlice) => adminOrdersSlice.adminOrders
);
export const selectAdminOrdersIsLoading = createSelector(
  [selectAdminOrdersReducer],
  (adminOrdersSlice) => adminOrdersSlice.isLoading
);
