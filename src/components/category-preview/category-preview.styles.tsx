import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled(Link)`
  font-size: 28px;
`;
export const Preview = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
