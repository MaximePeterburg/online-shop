import { all, call } from 'typed-redux-saga';
import { adminOrdersSaga } from './admin-orders/admin-orders.store';
import { categoriesSaga } from './categories/category.saga';
import { orderSaga } from './order/order.saga';
import { productSaga } from './product/product.saga';
import { searchSaga } from './search/search.saga';
import { userOrdersSaga } from './user-orders/user-orders.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield* all([
    call(categoriesSaga),
    call(userSagas),
    call(productSaga),
    call(searchSaga),
    call(orderSaga),
    call(userOrdersSaga),
    call(adminOrdersSaga)
  ]);
}
