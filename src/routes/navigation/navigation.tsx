import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer
} from './navigation.styles';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'></LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Каталог</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Выйти
            </NavLink>
          ) : (
            <NavLink to='/auth'>Войти</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
