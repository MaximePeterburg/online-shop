import { OrderDetails } from '../../store/order/order.types';
import OrderItemCard from '../order-item-card/order-item-card.component';
import { OrderPreviewContainer } from './order-preview.styles';

export type OrderPreviewProps = {
  orderDetails: OrderDetails;
};
const OrderPreview = ({ orderDetails }: OrderPreviewProps) => {
  return (
    <OrderPreviewContainer>
      {orderDetails.cartItems.map((orderItem) => (
        <OrderItemCard orderItem={orderItem} />
      ))}
    </OrderPreviewContainer>
  );
};

export default OrderPreview;
