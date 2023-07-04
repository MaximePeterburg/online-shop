import { OrderItem as TOrderItem } from '../../store/order/order.types';
import OrderItemCard from '../order-item-card/order-item-card.component';

type OrderItemProps = {
  orderItem: TOrderItem;
};

const OrderItem = ({ orderItem }: OrderItemProps) => {
  return (
    <div>
      {orderItem.cartItems.map((cartItem) => (
        <OrderItemCard orderCartItem={cartItem} />
      ))}
    </div>
  );
};

export default OrderItem;
