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
  @media screen and (max-width: 800px) {
    padding: 0.25rem 0.3rem;
  }
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
  @media screen and (max-width: 800px) {
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 3rem;
    overflow: hidden;
  }
`;
