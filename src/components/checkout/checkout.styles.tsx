import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 55%;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;
export const HeaderBlock = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;
export const Total = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: end;
  width: 100%;
`;
