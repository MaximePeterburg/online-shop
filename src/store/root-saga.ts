import { all, call } from 'typed-redux-saga';
import { categoriesSaga } from './categories/category.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
