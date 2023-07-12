import { UserOrderItem } from '../../store/user-orders/user-orders.types';
import OrderItemCard from '../order-item-card/order-item-card.component';
import {
  Header,
  HeaderBlock,
  Id,
  OrderItemContainer,
  OrderItems,
  Total,
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
          <HeaderBlock>
            <span>Адрес доставки:</span>
            <div>
              <b>{address}</b>
            </div>
          </HeaderBlock>
          <HeaderBlock>
            <span>Номер телефона:</span>
            <div>
              <b>{phoneNumber}</b>
            </div>
          </HeaderBlock>
          <HeaderBlock>
            <span>Получатель:</span>
            <div>
              <b>{userName}</b>
            </div>
          </HeaderBlock>
          <HeaderBlock>
            <span>Дата заказа:</span>
            <div>
              <b>{createdAt.toLocaleDateString()}</b>
            </div>
          </HeaderBlock>
        </UserInfo>
      </Header>
      <OrderItems>
        {orderItem.cartItems.map((cartItem) => (
          <OrderItemCard key={cartItem.id} orderCartItem={cartItem} />
        ))}
      </OrderItems>
      <Total>Всего: {total} &#8381;</Total>
    </OrderItemContainer>
  );
};

export default OrderItem;
