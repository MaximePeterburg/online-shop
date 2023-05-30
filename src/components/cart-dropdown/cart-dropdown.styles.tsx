import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const Header = styled.div`
  font-size: 0.89rem;
  color: gray;
  margin: 0.6rem 2rem 0.2rem 2rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px gray solid;
  @media screen and (max-width: 800px) {
    margin: 0.8rem;
  }
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
    margin: auto;
    margin-bottom: 0.6rem;
    width: 80%;
  }
  @media screen and (max-width: 800px) {
    width: 50%;
    min-width: 240px;
    ${BaseButton}, ${InvertedButton}, ${GoogleSignInButton} {
      width: 92%;
    }
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: orange; */
  margin: 10px 2rem;
  @media screen and (max-width: 800px) {
    margin: 0.8rem;
    /* width: 95%; */
  }
`;
export const CartTotal = styled.div`
  font-weight: bold;
  color: #d50032;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
  overflow-x: hidden;
  height: 340px;
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
