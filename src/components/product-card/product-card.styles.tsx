import styled from 'styled-components';
import { CartItemCount } from '../cart-item/cart-item.styles';
import { redColor } from '../category-preview/category-preview.styles';
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    :hover {
      filter: brightness(110%);
      /* transform: scale(1.1); */
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  button {
    margin-top: auto;
  }
`;
export const ProductCardCounter = styled(CartItemCount)`
  height: 3rem;
  max-width: 5rem;
  margin: auto auto 0 auto;
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
  width: 60%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Price = styled.span`
  color: ${redColor};
`;
