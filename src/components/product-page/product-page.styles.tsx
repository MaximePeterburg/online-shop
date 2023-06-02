import styled from 'styled-components';
import { BaseButton } from '../button/button.styles';
import { ProductCardCounter } from '../product-card/product-card.styles';

export const ProductPageContainer = styled.div`
  display: flex;
  margin: 5rem 10rem;
  @media screen and (max-width: 800px) {
    margin: 1rem;
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
`;
export const ProductDescription = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(220, 223, 232);
  padding: 2rem;
  @media screen and (max-width: 800px) {
    padding: 0.2rem;
  }
`;
export const Price = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  font-size: 3rem;
  color: #d50032;
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
  }
`;
export const ProductPageCounter = styled(ProductCardCounter)`
  width: 100%;
  max-width: 6rem;
`;
