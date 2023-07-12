import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightBlueColor } from '../cart-item/cart-item.styles';

export const SearchSuggestionLink = styled(Link)``;
export const SearchSuggestionContainer = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  :hover {
    background-color: ${lightBlueColor};
  }
  height: 4rem;
  width: 100%;
  display: flex;
`;
export const SuggestionImageContainer = styled.div`
  height: 100%;
  img {
    height: 100%;
  }
`;
export const SuggestionName = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;
