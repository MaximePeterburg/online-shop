import { OrderItem } from '../order/order.types';

export enum USER_ORDERS_ACTION_TYPES {
  FETCH_USER_ORDERS_START = 'user_orders/FETCH_USER_ORDERS_START',
  FETCH_USER_ORDERS_SUCCESS = 'user_orders/FETCH_USER_ORDERS_SUCCESS',
  FETCH_USER_ORDERS_FAILED = 'user_orders/FETCH_USER_ORDERS_FAILED'
}
export type UserOrderItem = OrderItem & {
  createdAt: Date;
  id: string;
};
