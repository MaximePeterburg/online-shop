import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  border-bottom: 1px solid darkgrey;
  height: auto;
  align-items: center;
  padding: 15px 0;
`;
export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const BaseSpan = styled.span`
  width: 20%;
  display: flex;
  justify-content: center;
`;
export const Quantity = styled(BaseSpan)`
  display: flex;
`;
export const Arrow = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid black;
  border-radius: 50%;
`;
export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  p {
    cursor: pointer;
  }
`;
