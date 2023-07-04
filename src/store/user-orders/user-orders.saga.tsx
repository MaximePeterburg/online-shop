import { all, call, put, takeLatest } from 'typed-redux-saga';
import { getUserOrdersFromCollection } from '../../utils/firebase/firebase.utils';
import {
  FetchUserOrdersStart,
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
export function* userOrdersSaga() {
  yield* all([call(onFetchUserOrders)]);
}
