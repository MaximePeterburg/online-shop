import styled from 'styled-components';

export const OrdersPageContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const NoItemsError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
