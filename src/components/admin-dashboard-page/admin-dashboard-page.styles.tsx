import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightBlueColor } from '../cart-item/cart-item.styles';

export const AdminDashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const DashboardLinks = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 2rem;
  background-color: ${lightBlueColor};
  @media screen and (max-width: 800px) {
    flex-direction: row;
    background-color: unset;
    overflow-x: scroll;
    white-space: nowrap;
    margin: 0 0;
  }
`;
export const DashboardLink = styled(Link)`
  padding: 0.2rem;
  @media screen and (max-width: 800px) {
    background-color: ${lightBlueColor};
    border-radius: 1rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
`;
export const OptionPlaceholder = styled.div`
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
