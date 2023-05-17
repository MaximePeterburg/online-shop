import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { searchReducer } from './search/search.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  cart: cartReducer,
  search: searchReducer
});
