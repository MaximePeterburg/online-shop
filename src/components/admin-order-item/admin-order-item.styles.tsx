import styled, { css } from 'styled-components';
import { redColor } from '../category-preview/category-preview.styles';

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const colorGreenStyles = css`
  font-size: 1rem;
  color: green;
`;
const colorRedStyles = css`
  font-size: 1rem;
  color: ${redColor};
`;
export type StatusSpanProps = {
  color: string;
};
export const StatusSpan = styled.span<StatusSpanProps>`
  font-weight: bold;
  color: ${({ color }) => {
    if (color === 'green') return colorGreenStyles;
    if (color === 'red') return colorRedStyles;
  }};
`;
