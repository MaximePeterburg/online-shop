import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/category.types';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartItemCount } from '../cart-item/cart-item.styles';
import { Arrow } from '../checkout-item/checkout-item.styles';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
  ProductCardCounter
} from './product-card.styles';

export type ProductCardProps = {
  product: CategoryItem;
};
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const existingCartItem = cartItems.find((item) => item.name === product.name);
  const removeItem = () => {
    existingCartItem && dispatch(removeItemFromCart(cartItems, existingCartItem));
  };
  const addItem = () => {
    existingCartItem && dispatch(addItemToCart(cartItems, existingCartItem));
  };
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}></img>
      <Footer>
        <Name>{name}</Name>
        <Price>{price} &#8381;</Price>
      </Footer>
      {!existingCartItem ? (
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.base}>
          Добавить в Корзину
        </Button>
      ) : (
        <ProductCardCounter>
          <Arrow onClick={removeItem}>-</Arrow> {existingCartItem.quantity}
          <Arrow onClick={addItem}>+</Arrow>
        </ProductCardCounter>
      )}
    </ProductCardContainer>
  );
};
