import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector';
import Spinner from '../spinner/spinner.component';
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
  const { name, quantity, price, imageUrl, id } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoryToNavigate = Object.keys(categoriesMap).find((category) =>
    categoriesMap[category].map((categoryItem) => {
      if (categoryItem.id === id) return true;
      return false;
    })
  );
  const handleNavigate = () => {
    navigate(`/shop/${categoryToNavigate}/${id}`);
  };
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
        {categoriesIsLoading ? (
          <Spinner />
        ) : (
          <img onClick={handleNavigate} src={imageUrl} alt={name}></img>
        )}
      </ImageContainer>
      <BaseSpan style={{ cursor: 'pointer' }} onClick={handleNavigate}>
        {name}
      </BaseSpan>
      <Quantity>
        {/* <Arrow onClick={removeItem}>&#10094;</Arrow> */}
        <Arrow onClick={removeItem}>-</Arrow>
        <BaseSpan>{quantity}</BaseSpan>
        {/* <Arrow onClick={addItem}> &#10095;</Arrow> */}
        <Arrow onClick={addItem}> +</Arrow>
      </Quantity>
      <BaseSpan style={{ color: '#d50032' }}>{price} &#8381;</BaseSpan>
      <RemoveButton onClick={clearItem}>
        <p>X</p>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
