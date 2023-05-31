import styled from 'styled-components';

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
  img {
    width: 100%;
  }
`;
export const ItemDetails = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem;
  span {
    font-size: 16px;
  }
`;
