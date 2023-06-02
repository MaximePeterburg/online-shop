import styled from 'styled-components';
import { CartItemCount } from '../cart-item/cart-item.styles';
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    cursor: pointer;
    object-fit: cover;
    width: 100%;
  }
  button {
    margin-top: auto;
  }
  :hover img {
    /* filter: brightness(110%); */
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
export const ProductCardCounter = styled(CartItemCount)`
  height: 3rem;
  max-width: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const Footer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Name = styled.span`
  width: 70%;
`;
export const Price = styled.span`
  color: #d50032;
`;
