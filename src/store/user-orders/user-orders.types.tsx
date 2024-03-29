import { OrderItem } from '../order/order.types';

export enum USER_ORDERS_ACTION_TYPES {
  FETCH_USER_ORDERS_START = 'user_orders/FETCH_USER_ORDERS_START',
  FETCH_USER_ORDERS_SUCCESS = 'user_orders/FETCH_USER_ORDERS_SUCCESS',
  FETCH_USER_ORDERS_FAILED = 'user_orders/FETCH_USER_ORDERS_FAILED',
  FETCH_ALL_ORDERS_START = 'user_orders/FETCH_ALL_ORDERS_START',
  FETCH_ALL_ORDERS_FAILED = 'user_orders/FETCH_ALL_ORDERS_FAILED',
  FETCH_ALL_ORDERS_SUCCESS = 'user_orders/FETCH_ALL_ORDERS_SUCCESS',
  SET_ORDER_IS_DELIVERED_START = 'user_orders/SET_ORDER_IS_DELIVERED_START',
  SET_ORDER_IS_DELIVERED_SUCCESS = 'user_orders/SET_ORDER_IS_DELIVERED_SUCCESS',
  SET_ORDER_IS_DELIVERED_FAILED = 'user_orders/SET_ORDER_IS_DELIVERED_FAILED'
}
export enum USER_ORDER_DELIVERY_STATUSES {
  USER_ORDER_DELIVERY_CREATED = 'delivery_statuses/USER_ORDER_DELIVERY_CREATED',
  USER_ORDER_DELIVERY_CONFIRMED = 'delivery_statuses/USER_ORDER_DELIVERY_CONFIRMED',
  USER_ORDER_DELIVERY_DELIVERED = 'delivery_statuses/USER_ORDER_DELIVERY_DELIVERED',
  USER_ORDER_DELIVERY_CANCELED = 'delivery_statuses/USER_ORDER_DELIVERY_CANCELED'
}
export type UserOrderItem = OrderItem & {
  createdAt: Date;
  id: string;
  status: USER_ORDER_DELIVERY_STATUSES;
};
