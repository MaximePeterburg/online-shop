import styled from 'styled-components';
export const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const HeaderBlock = styled.div``;
export const Total = styled.h2``;
export const Id = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;
export const OrderItemContainer = styled.div`
  background-image: linear-gradient(#d5003243, rgb(220, 223, 232));
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;
export const OrderItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr));
  gap: 1rem;
`;
export const Header = styled.div`
  display: flex;
`;
