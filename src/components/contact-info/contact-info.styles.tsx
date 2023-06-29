import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContactInfoContianer = styled.div``;
export const AuthLink = styled(Link)`
  font-size: 2rem;
`;
export const PaymentModal = styled.dialog``;
export const ModalWrapper = styled.div``;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  border-bottom: 1px lightgray solid;
`;
export const CloseButton = styled.div`
  cursor: pointer;
  color: #d50032;
  padding: 0.5rem;
  font-weight: bold;
`;
export const ErrorMessage = styled.div`
  color: #d50032;
`;
