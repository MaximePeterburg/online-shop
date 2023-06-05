import styled from 'styled-components';
import { CategoryContainer } from '../category-page/category-page.styles';

export const ResultsContainer = styled(CategoryContainer)`
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const SearchResults = styled.div``;
