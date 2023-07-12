import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { redColor } from '../category-preview/category-preview.styles';
import { FormInputLabel } from '../form-input/form-input.styles';

export const AuthLink = styled(Link)`
  font-size: 2rem;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  border-bottom: 1px lightgray solid;
`;
export const CloseButton = styled.div`
  cursor: pointer;
  color: ${redColor};
  padding: 0.5rem;
  font-weight: bold;
`;
export const ErrorMessage = styled.div`
  color: ${redColor};
`;

export const StyledAddressSuggestions = styled.div`
  color: red;
  padding: 2rem;
  border: 1px solid red;
`;
