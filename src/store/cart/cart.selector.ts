import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartState } from './cart.reducer';

export const selectCartReducer = (state: RootState): CartState => state.cart;
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
);
