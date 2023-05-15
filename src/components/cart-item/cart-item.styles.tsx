import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 0px 15px 35px;
  /* height: 80px; */
  &:hover {
    background-color: rgb(220, 223, 232);
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
  width: 20%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ItemDetails = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  span {
    font-size: 16px;
  }
`;
