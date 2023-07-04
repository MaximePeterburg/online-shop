import { OrderItem as TOrderItem } from '../../store/order/order.types';
import OrderItemCard from '../order-item-card/order-item-card.component';
import { OrderItemContainer } from './order-item.styles';

type OrderItemProps = {
  orderItem: TOrderItem;
};

const OrderItem = ({ orderItem }: OrderItemProps) => {
  return (
    <OrderItemContainer>
      {orderItem.cartItems.map((cartItem) => (
        <OrderItemCard key={cartItem.id} orderCartItem={cartItem} />
      ))}
    </OrderItemContainer>
  );
};

export default OrderItem;
