import styled from 'styled-components';

export const CartIconContainer = styled.div`
  cursor: pointer;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const ItemCount = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
