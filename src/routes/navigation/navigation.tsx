import { Outlet } from 'react-router-dom';
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer
} from './navigation.styles';

type Props = {};

function Navigation({}: Props) {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'></LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Каталог</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
