import styled from 'styled-components';
import { BaseButton } from '../button/button.styles';
import { lightBlueColor } from '../cart-item/cart-item.styles';
import { redColor } from '../category-preview/category-preview.styles';
import { ProductCardCounter } from '../product-card/product-card.styles';

export const ProductPageContainer = styled.div`
  display: flex;
  margin: 5rem 10rem;
  @media screen and (max-width: 800px) {
    margin: 1rem;
    flex-direction: column;
  }
`;
export const ProductPageImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 350px;
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const ProductDescription = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${lightBlueColor};
  padding: 2rem;
  @media screen and (max-width: 800px) {
    padding: 0.2rem;
    width: 100%;
  }
`;
export const Price = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  font-size: 3rem;
  color: ${redColor};
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;
export const DescriptionFooter = styled.div`
  margin-left: auto;
  /* min-width: 15rem; */
  @media screen and (max-width: 800px) {
    /* min-width: 5rem; */
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const ProductPageCounter = styled(ProductCardCounter)`
  width: 100%;
  max-width: 6rem;
`;
