import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CartItem } from '../cart/cart.types';
import { ContactInfo, ORDER_ACTION_TYPES, OrderDetails } from './order.types';

export const addInfoToOrder = (
  orderDetails: OrderDetails,
  cartItems: CartItem[],
  contactInfo: ContactInfo,
  userId: string
): SetOrderItem => {
  const newOrderItem = {
    ...orderDetails,
    cartItems: cartItems,
    contactInfo: contactInfo,
    userId: userId
  };
  return setOrderItem(newOrderItem);
};
export type SetOrderItem = ActionWithPayload<
  ORDER_ACTION_TYPES.SET_ORDER_ITEM,
  OrderDetails
>;
export const setOrderItem = withMatcher(
  (orderDetails: OrderDetails): SetOrderItem =>
    createAction(ORDER_ACTION_TYPES.SET_ORDER_ITEM, orderDetails)
);

export type CreateOrderStart = ActionWithPayload<
  ORDER_ACTION_TYPES.CREATE_ORDER_START,
  OrderDetails
>;

export const createOrderStart = withMatcher(
  (orderDetails: OrderDetails): CreateOrderStart =>
    createAction(ORDER_ACTION_TYPES.CREATE_ORDER_START, orderDetails)
);
export type CreateOrderSuccess = Action<ORDER_ACTION_TYPES.CREATE_ORDER_SUCCESS>;
export const createOrderSuccess = withMatcher(
  (): CreateOrderSuccess => createAction(ORDER_ACTION_TYPES.CREATE_ORDER_SUCCESS)
);
export type CreateOrderFailed = ActionWithPayload<
  ORDER_ACTION_TYPES.CREATE_ORDER_SUCCESS,
  Error
>;
export const createOrderFailed = withMatcher(
  (error: Error): CreateOrderFailed =>
    createAction(ORDER_ACTION_TYPES.CREATE_ORDER_SUCCESS, error)
);
