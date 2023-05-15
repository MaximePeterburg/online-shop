import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const Header = styled.div`
  font-size: 14px;
  color: gray;
  margin: 0px 35px 4px 35px;
  padding: 10px 0px;
  border-bottom: 1px gray solid;
`;
export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 400px;
  height: 440px;
  top: 75px;
  right: 40px;
  border: 1px solid black;
  background-color: white;
  z-index: 1;
  ${BaseButton}, ${InvertedButton}, ${GoogleSignInButton} {
    margin: auto 35px 15px 35px;
    width: 80%;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: orange; */
  margin: 10px 35px;
`;
export const CartTotal = styled.div`
  font-weight: bold;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 340px;
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
