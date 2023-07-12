import styled from 'styled-components';
import { redColor } from '../category-preview/category-preview.styles';

export const OrderItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Name = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3rem;
  overflow: hidden;
`;
export const Price = styled.div`
  font-weight: bold;
  color: ${redColor};
  white-space: nowrap;
`;
export const ProductDetails = styled.div``;
export const Quantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
