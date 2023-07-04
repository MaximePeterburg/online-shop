import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { hamburgerMenuReducer } from './hamburger-menu/hamburger-menu.store';
import { orderReducer } from './order/order.reducer';
import { productReducer } from './product/product.reducer';
import { searchReducer } from './search/search.reducer';
import { userOrdersReducer } from './user-orders/user-orders.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  cart: cartReducer,
  hamburgerMenu: hamburgerMenuReducer,
  search: searchReducer,
  product: productReducer,
  order: orderReducer,
  userOrders: userOrdersReducer
});
