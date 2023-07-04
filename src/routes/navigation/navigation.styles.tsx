import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
  }
`;
export const LinkList = styled.div`
  @media screen and (max-width: 800px) {
    visibility: hidden;
  }
`;
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  background-size: cover;
  background-position: center;
  background-image: url('https://xn--d1ai6ai.xn--p1ai/design/desktop/img/pic/w2.png?version=1679981818');
`;
