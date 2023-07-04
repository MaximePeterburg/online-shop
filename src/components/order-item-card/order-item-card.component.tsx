import { CartItem } from '../../store/cart/cart.types';
import {
  Footer,
  Name,
  OrderItemCardContainer,
  Price,
  ProductDetails,
  Quantity
} from './order-item-card.styles';

type OrderItemCardProps = {
  orderCartItem: CartItem;
};

const OrderItemCard = ({ orderCartItem }: OrderItemCardProps) => {
  const { imageUrl, name, price, quantity } = orderCartItem;
  return (
    <OrderItemCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price} &#8381;</Price>
      </Footer>
      <Quantity>
        <b> {quantity} шт.</b>
      </Quantity>
    </OrderItemCardContainer>
  );
};

export default OrderItemCard;
