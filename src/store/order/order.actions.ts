import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CartItem } from '../cart/cart.types';
import { ContactInfo, ORDER_ACTION_TYPES, OrderItem } from './order.types';
export const addCartItemsToOrder = (orderItem: OrderItem, cartItems: CartItem[]) => {
  orderItem.cartItems = cartItems;
};
export type SetContactInformation = ActionWithPayload<
  ORDER_ACTION_TYPES.SET_CONTACT_INFO,
  ContactInfo
>;
export const setContactInformation = withMatcher(
  (contactInfo: ContactInfo): SetContactInformation =>
    createAction(ORDER_ACTION_TYPES.SET_CONTACT_INFO, contactInfo)
);
export type SetOrderItem = ActionWithPayload<
  ORDER_ACTION_TYPES.SET_ORDER_ITEM,
  OrderItem
>;
export const setOrderItem = withMatcher(
  (orderItem: OrderItem): SetOrderItem =>
    createAction(ORDER_ACTION_TYPES.SET_ORDER_ITEM, orderItem)
);
export type CreateOrderStart = ActionWithPayload<
  ORDER_ACTION_TYPES.CREATE_ORDER_START,
  OrderItem
>;
export const createOrderStart = withMatcher(
  (order: OrderItem): CreateOrderStart =>
    createAction(ORDER_ACTION_TYPES.CREATE_ORDER_START, order)
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
