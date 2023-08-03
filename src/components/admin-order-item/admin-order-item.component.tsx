import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAllOrdersStart,
  setOrderIsDeliveredStart
} from '../../store/user-orders/user-orders.action';
import {
  USER_ORDER_DELIVERY_STATUSES,
  UserOrderItem
} from '../../store/user-orders/user-orders.types';
import Button from '../button/button.component';
import OrderItemCard from '../order-item-card/order-item-card.component';
import {
  Header,
  OrderItemContainer,
  OrderItems,
  UserInfo
} from '../order-item/order-item.styles';
import { Status, StatusSpan } from './admin-order-item.styles';

type OrderItemProps = {
  orderItem: UserOrderItem;
};

const AdminOrderItem = ({ orderItem }: OrderItemProps) => {
  const dispatch = useDispatch();
  const { userName, createdAt, id, userId, status } = orderItem;
  const [statusStr, setStatusStr] = useState('создан');
  const { phoneNumber, address } = orderItem.contactInfo;
  let total = 0;
  orderItem.cartItems.map((cartItem) => {
    total = total + cartItem.price * cartItem.quantity;
  });
  const handleClick = () => {
    dispatch(setOrderIsDeliveredStart(id));
    setStatusStr('доставлен');
  };
  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   console.log(isFirstRender);
  //   if (!isFirstRender.current) {
  //     dispatch(fetchAllOrdersStart());
  //     console.log('orders fetched');
  //   }
  //   isFirstRender.current = false;
  // }, [statusIsSet]);

  return (
    <OrderItemContainer>
      <Header>
        <UserInfo>
          <div>
            Код заказа: <b>{id}</b>
          </div>
          <div>
            ID Пользователя: <b>{userId}</b>
          </div>
          <div>
            <span>Адрес доставки:</span>
            <div>
              <b>{address}</b>
            </div>
          </div>
          <div>
            <span>Номер телефона:</span>
            <div>
              <b>{phoneNumber}</b>
            </div>
          </div>
          <div>
            <span>Получатель:</span>
            <div>
              <b>{userName ? userName : 'Гость'}</b>
            </div>
          </div>
          <div>
            <span>Дата заказа:</span>
            <div>
              <b>{createdAt.toLocaleDateString()}</b>
            </div>
          </div>
        </UserInfo>
      </Header>
      <OrderItems>
        {orderItem.cartItems.map((cartItem) => (
          <OrderItemCard key={cartItem.id} orderCartItem={cartItem} />
        ))}
      </OrderItems>
      <h2>Всего: {total} &#8381;</h2>
      <Status>
        <div>
          Статус заказа:{' '}
          {statusStr === USER_ORDER_DELIVERY_STATUSES.USER_ORDER_DELIVERY_CREATED && (
            <StatusSpan color='red'>создан</StatusSpan>
          )}
          {status === USER_ORDER_DELIVERY_STATUSES.USER_ORDER_DELIVERY_CREATED && (
            <StatusSpan color='red'>создан</StatusSpan>
          )}
          {status === USER_ORDER_DELIVERY_STATUSES.USER_ORDER_DELIVERY_DELIVERED && (
            <StatusSpan color='green'>доставлен</StatusSpan>
          )}
        </div>
        {status === USER_ORDER_DELIVERY_STATUSES.USER_ORDER_DELIVERY_CREATED && (
          <Button onClick={handleClick}>Доставлен</Button>
        )}
      </Status>
    </OrderItemContainer>
  );
};

export default AdminOrderItem;
