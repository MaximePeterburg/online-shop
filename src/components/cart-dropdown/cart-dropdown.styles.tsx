import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  width: 400px;
  height: 340px;
  top: 75px;
  right: 40px;
  border: 1px solid black;
  background-color: white;
  z-index: 1;
  ${BaseButton}, ${InvertedButton}, ${GoogleSignInButton} {
    margin-top: auto;
    width: 100%;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
export const CartTotal = styled.div``;
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 240px;
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
