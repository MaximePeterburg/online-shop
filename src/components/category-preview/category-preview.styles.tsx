import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
export const Preview = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 25px;
  }
`;
