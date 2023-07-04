import { useState } from 'react';
import { OrderItem as TOrderItem } from '../../store/order/order.types';
import OrderItemCard from '../order-item-card/order-item-card.component';
import {
  Header,
  OrderItemContainer,
  OrderItems,
  Total,
  UserInfo
} from './order-item.styles';

type OrderItemProps = {
  orderItem: TOrderItem;
};

const OrderItem = ({ orderItem }: OrderItemProps) => {
  const { phoneNumber, address } = orderItem.contactInfo;
  return (
    <OrderItemContainer>
      <Header>
        <UserInfo>
          Адрес доставки:
          <br />
          <b> {address}</b>
          <br />
          Получатель:
          <br />
          <b>{phoneNumber}</b>
          <br />
        </UserInfo>
      </Header>
      <OrderItems>
        {orderItem.cartItems.map((cartItem) => (
          <OrderItemCard key={cartItem.id} orderCartItem={cartItem} />
        ))}
      </OrderItems>
    </OrderItemContainer>
  );
};

export default OrderItem;
