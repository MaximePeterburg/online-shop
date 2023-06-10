import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0px 1rem 2rem;
  &:hover {
    background-color: rgb(220, 223, 232);
  }
  @media screen and (max-width: 800px) {
    padding: 0.2rem 0 0.2rem 0.4rem;
  }
`;
export const DeleteItemButton = styled.div`
  width: 15%;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
export const CartItemCount = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  width: 25%;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
export const CartSpinner = styled(SpinnerContainer)`
  width: 25%;
`;
export const ItemDetails = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0.75rem;
  span {
    font-size: 16px;
  }
`;
