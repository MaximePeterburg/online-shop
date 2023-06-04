import { all, call, put, takeLatest } from 'typed-redux-saga';
import { getItemFromDocuments } from '../../utils/firebase/firebase.utils';
import {
  FetchProductStart,
  fetchProductFailed,
  fetchProductSuccess
} from './product.action';
import { PRODUCT_ACTION_TYPES } from './product.types';

export function* fetchProductAsync({ payload }: FetchProductStart) {
  try {
    const product = yield* call(getItemFromDocuments, payload);
    yield* put(fetchProductSuccess(product));
  } catch (error) {
    yield* put(fetchProductFailed(error as Error));
  }
}
export function* onFetchProduct() {
  yield* takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START, fetchProductAsync);
}
export function* productSaga() {
  yield* all([call(onFetchProduct)]);
}
