import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/category.types';
import Button from '../button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';

export type ProductCardProps = {
  product: CategoryItem;
};
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}></img>
      <Button onClick={addProductToCart}>Добавить в Корзину</Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};
