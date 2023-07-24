import { all, call, put, takeLatest } from 'typed-redux-saga';
import {
  getOrdersFromCollection,
  getUserOrdersFromCollection
} from '../../utils/firebase/firebase.utils';
import {
  FetchUserOrdersStart,
  fetchAllOrdersFailed,
  fetchAllOrdersSuccess,
  fetchUserOrdersFailed,
  fetchUserOrdersSuccess
} from './user-orders.action';
import { USER_ORDERS_ACTION_TYPES } from './user-orders.types';

export function* fetchUserOrdersAsync({ payload }: FetchUserOrdersStart) {
  try {
    const userOrders = yield* call(getUserOrdersFromCollection, payload);
    yield* put(fetchUserOrdersSuccess(userOrders));
  } catch (error) {
    yield* put(fetchUserOrdersFailed(error as Error));
  }
}

export function* onFetchUserOrders() {
  yield* takeLatest(
    USER_ORDERS_ACTION_TYPES.FETCH_USER_ORDERS_START,
    fetchUserOrdersAsync
  );
}
export function* fetchAllOrdersAsync() {
  try {
    const orders = yield* call(getOrdersFromCollection);
    yield* put(fetchAllOrdersSuccess(orders));
  } catch (error) {
    yield* put(fetchAllOrdersFailed(error as Error));
  }
}
export function* onFetchAllOrders() {
  yield* takeLatest(USER_ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_START, fetchAllOrdersAsync);
}
export function* userOrdersSaga() {
  yield* all([call(onFetchUserOrders), call(onFetchAllOrders)]);
}
