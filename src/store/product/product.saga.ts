import { all, call, put, takeLatest } from 'typed-redux-saga';
import { getItemFromDocumentsById } from '../../utils/firebase/firebase.utils';
import {
  FetchProductByIdStart,
  fetchProductByIdFailed,
  fetchProductByIdSuccess
} from './product.action';
import { PRODUCT_ACTION_TYPES } from './product.types';

export function* fetchProductByIdAsync({ payload }: FetchProductByIdStart) {
  try {
    const product = yield* call(getItemFromDocumentsById, payload);
    yield* put(fetchProductByIdSuccess(product));
  } catch (error) {
    yield* put(fetchProductByIdFailed(error as Error));
  }
}
export function* onFetchProductById() {
  yield* takeLatest(
    PRODUCT_ACTION_TYPES.FETCH_PRODUCT_BY_ID_START,
    fetchProductByIdAsync
  );
}
export function* productSaga() {
  yield* all([call(onFetchProductById)]);
}
