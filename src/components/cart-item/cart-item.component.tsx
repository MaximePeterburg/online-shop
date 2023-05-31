import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { Arrow } from '../checkout-item/checkout-item.styles';
import {
  CartItemContainer,
  CartItemCount,
  DeleteItemButton,
  ImageContainer,
  ItemDetails
} from './cart-item.styles';
export type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const addItem = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const clearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  return (
    <CartItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name}></img>
      </ImageContainer>
      <ItemDetails>
        <span>{name}</span>
        <CartItemCount>
          <Arrow onClick={removeItem}>-</Arrow> {quantity}
          <Arrow onClick={addItem}>+</Arrow>
          <span style={{ color: '#d50032' }}>{price} &#8381;</span>
          <DeleteItemButton onClick={clearItem}>X</DeleteItemButton>
        </CartItemCount>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
