import { all, call, put, takeLatest } from 'typed-redux-saga';
import { createOrderDocument } from '../../utils/firebase/firebase.utils';
import { CreateOrderStart, createOrderFailed, createOrderSuccess } from './order.actions';
import { ORDER_ACTION_TYPES } from './order.types';

export function* createOrderAsync({ payload }: CreateOrderStart) {
  try {
    yield* call(createOrderDocument, payload);
    yield* put(createOrderSuccess());
  } catch (error) {
    yield* put(createOrderFailed(error as Error));
  }
}
export function* onCreateOrder() {
  yield* takeLatest(ORDER_ACTION_TYPES.CREATE_ORDER_START, createOrderAsync);
}
export function* orderSaga() {
  yield* all([call(onCreateOrder)]);
}
