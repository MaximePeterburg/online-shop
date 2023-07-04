import styled from 'styled-components';

export const OrderItemContainer = styled.div`
  width: 50%;
  background-image: linear-gradient(#d5003243, rgb(220, 223, 232));
  display: grid;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr));
  gap: 1rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
