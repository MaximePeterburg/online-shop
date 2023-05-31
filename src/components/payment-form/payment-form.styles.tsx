import styled from 'styled-components';
import { InvertedButton } from '../button/button.styles';

export const PaymentFormContainer = styled.form`
  min-width: 22rem;
  ${InvertedButton} {
    margin: 1rem 0 1rem auto;
  }
`;
