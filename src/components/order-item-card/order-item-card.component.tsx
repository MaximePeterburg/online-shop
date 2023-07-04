import { CartItem } from '../../store/cart/cart.types';

export type OrderItemCardProps = {
  orderItem: CartItem;
};

const OrderItemCard = ({ orderItem }: OrderItemCardProps) => {
  return <div>{orderItem.name}</div>;
};

export default OrderItemCard;
