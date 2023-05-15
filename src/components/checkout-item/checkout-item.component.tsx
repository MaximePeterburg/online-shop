import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton
} from './checkout-item.styles';

export type CheckoutItemProps = {
  cartItem: CartItem;
};

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addItem = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const clearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        {/* <Arrow onClick={removeItem}>&#10094;</Arrow> */}
        <Arrow onClick={removeItem}>-</Arrow>
        <BaseSpan>{quantity}</BaseSpan>
        {/* <Arrow onClick={addItem}> &#10095;</Arrow> */}
        <Arrow onClick={addItem}> +</Arrow>
      </Quantity>
      <BaseSpan>{price} &#8381;</BaseSpan>
      <RemoveButton onClick={clearItem}>
        <p>X</p>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
