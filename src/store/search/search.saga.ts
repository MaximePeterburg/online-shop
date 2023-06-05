import { all, call, put, takeLatest } from 'typed-redux-saga';
import { getItemsFromDocumentsByTerm } from '../../utils/firebase/firebase.utils';
import {
  FetchSearchedProductStart,
  fetchSearchedProductsSuccess
} from './search.actions';
import { SEARCH_ACTION_TYPES } from './search.types';

export function* fetchSearchedProductsAsync({ payload }: FetchSearchedProductStart) {
  try {
    const searchedProducts = yield* call(getItemsFromDocumentsByTerm, payload);
    yield* put(fetchSearchedProductsSuccess(searchedProducts));
  } catch (error) {}
}
export function* onFetchSearchedProducts() {
  yield* takeLatest(
    SEARCH_ACTION_TYPES.FETCH_SEARCHED_PRODUCTS_START,
    fetchSearchedProductsAsync
  );
}
export function* searchSaga() {
  yield* all([call(onFetchSearchedProducts)]);
}
