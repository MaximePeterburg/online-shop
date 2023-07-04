import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../../assets/hamburger-menu.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import HamburgerMenuIcon from '../../components/hamburger-menu-icon/hamburger-menu-icon.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  HamburgerMenu,
  LinkList,
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer
} from './navigation.styles';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <HamburgerMenu>
          <HamburgerMenuIcon />
          <NavLink to='/shop'>КАТАЛОГ</NavLink>
          {currentUser ? (
            <>
              <NavLink to='/orders'>ЗАКАЗЫ</NavLink>
              <NavLink as='span' onClick={signOutUser}>
                ВЫЙТИ
              </NavLink>
            </>
          ) : (
            <NavLink to='/auth'>ВОЙТИ</NavLink>
          )}
        </HamburgerMenu>
        <LogoContainer to='/'></LogoContainer>
        <SearchBar />
        <NavLinks>
          <LinkList>
            <NavLink to='/shop'>КАТАЛОГ</NavLink>
            {currentUser ? (
              <>
                <NavLink to='/orders'>ЗАКАЗЫ</NavLink>
                <NavLink as='span' onClick={signOutUser}>
                  ВЫЙТИ
                </NavLink>
              </>
            ) : (
              <NavLink to='/auth'>ВОЙТИ</NavLink>
            )}
          </LinkList>
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
