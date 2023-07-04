import React from 'react';
import { CartItem } from '../../store/cart/cart.types';

type OrderItemCardProps = {
  orderCartItem: CartItem;
};

const OrderItemCard = ({ orderCartItem }: OrderItemCardProps) => {
  return <div>{orderCartItem.name}</div>;
};

export default OrderItemCard;
