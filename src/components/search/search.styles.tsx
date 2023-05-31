import styled from 'styled-components';
import { CategoryContainer } from '../category/category.styles';

export const ResultsContainer = styled(CategoryContainer)`
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
`;
