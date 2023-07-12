import { CartItem } from '../cart/cart.types';

export enum ORDER_ACTION_TYPES {
  SET_CONTACT_INFO = 'order/SET_CONTACT_INFO',
  SET_ORDER_ITEM = 'order/SET_ORDER_ITEM',
  CREATE_ORDER_START = 'order/CREATE_ORDER_START',
  CREATE_ORDER_SUCCESS = 'order/CREATE_ORDER_SUCCESS',
  CREATE_ORDER_FAILED = 'order/CREATE_ORDER_FAILED'
}
export type ContactInfo = {
  address: string;
  phoneNumber: string;
};
export type OrderItem = {
  cartItems: CartItem[];
  contactInfo: ContactInfo;
  userId: string;
  userName: string;
};
