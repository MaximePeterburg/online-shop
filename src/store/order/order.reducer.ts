import { AnyAction } from 'redux';
import { CartItem } from '../cart/cart.types';
import {
  createOrderFailed,
  createOrderStart,
  createOrderSuccess,
  setContactInformation
} from './order.actions';
import { ContactInfo, OrderItem } from './order.types';
export type OrderState = {
  order: OrderItem;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const ORDER_INITIAL_STATE: OrderState = {
  order: {
    cartItems: [],
    contactInfo: { address: '', phoneNumber: '+7' },
    userId: ''
  },
  isLoading: false,
  error: null
};
export const orderReducer = (
  state = ORDER_INITIAL_STATE,
  action: AnyAction
): OrderState => {
  if (setContactInformation.match(action)) {
    return { ...state, order: { ...state.order, contactInfo: action.payload } };
  }
  if (createOrderStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (createOrderSuccess.match(action)) {
    return { ...state, isLoading: false };
  }
  if (createOrderFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};
