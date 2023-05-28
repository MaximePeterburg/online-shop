import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryContainer } from '../category/category.styles';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
export const Title = styled(Link)`
  font-size: 28px;
`;
export const Preview = styled(CategoryContainer)``;
// export const Preview = styled.div`
//   display: grid;

//   @media screen and (max-width: 800px) {
//     grid-template-columns: 1fr 1fr;
//     grid-column-gap: 15px;
//     grid-row-gap: 25px;
//   }
// `;
