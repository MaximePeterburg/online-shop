import { FC } from 'react';
import { CategoryItem } from '../../store/categories/category.types';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';

export type ProductCardProps = {
  product: CategoryItem;
};
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { imageUrl, name, price } = product;

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}></img>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};
