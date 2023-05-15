import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { CART_ACTION_TYPES, CartItem } from './cart.types';

export const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItemToRemove.id === cartItem.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItemToClear.id === cartItem.id
  );
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToClear.id ? { ...cartItem, quantity: 0 } : cartItem
  );
};
export const isCartOpen = (cartStatus = true): boolean => !cartStatus;
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (bool: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
);
export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);
export const addItemToCart = (cartItems: CartItem[], product: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, product);
  return setCartItems(newCartItems);
};
export const removeItemFromCart = (cartItems: CartItem[], product: CartItem) => {
  const newCartItems = removeCartItem(cartItems, product);
  return setCartItems(newCartItems);
};
export const clearItemFromCart = (cartItems: CartItem[], product: CartItem) => {
  const newCartItems = clearCartItem(cartItems, product);
  return setCartItems(newCartItems);
};
export const switchIsCartOpen = (cartStatus: boolean) => {
  const newCartStatus = isCartOpen(cartStatus);
  return setIsCartOpen(newCartStatus);
};
