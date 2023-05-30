import styled from 'styled-components';
import { CategoryContainer } from '../category/category.styles';

// export const SearchResultsContainer = styled(CategoryContainer)`
//   display: block;
// `;
export const ResultsContainer = styled(CategoryContainer)`
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
`;
