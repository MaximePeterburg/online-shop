import { UserOrderItem } from '../../store/user-orders/user-orders.types';
import OrderItemCard from '../order-item-card/order-item-card.component';
import {
  Header,
  Id,
  OrderItemContainer,
  OrderItems,
  UserInfo
} from './order-item.styles';

type OrderItemProps = {
  orderItem: UserOrderItem;
};

const OrderItem = ({ orderItem }: OrderItemProps) => {
  const { userName, createdAt, id } = orderItem;
  const { phoneNumber, address } = orderItem.contactInfo;
  let total = 0;
  orderItem.cartItems.map((cartItem) => {
    total = total + cartItem.price * cartItem.quantity;
  });
  return (
    <OrderItemContainer>
      <Id>
        Код заказа: <b>{id}</b>
      </Id>
      <Header>
        <UserInfo>
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
    </OrderItemContainer>
  );
};

export default OrderItem;
