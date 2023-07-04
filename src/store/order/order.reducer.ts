import { AnyAction } from 'redux';
import {
  createOrderFailed,
  createOrderStart,
  createOrderSuccess,
  setOrderItem
} from './order.actions';
import { OrderDetails } from './order.types';
export type OrderState = {
  readonly orderDetails: OrderDetails;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const ORDER_INITIAL_STATE: OrderState = {
  orderDetails: {
    orderItems: [],
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
  if (setOrderItem.match(action)) {
    return { ...state, orderDetails: action.payload };
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
