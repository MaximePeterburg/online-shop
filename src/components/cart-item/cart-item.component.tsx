import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ImageContainer, ItemDetails } from './cart-item.styles';
export type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name}></img>
      </ImageContainer>
      <ItemDetails>
        <span>{name}</span>{' '}
        <span>
          {quantity} x {price} &#8381;
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
