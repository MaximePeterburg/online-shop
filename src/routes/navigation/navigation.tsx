import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../../assets/hamburger-menu.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import HamburgerMenuIcon from '../../components/hamburger-menu-icon/hamburger-menu-icon.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectIsHamburgerMenuOpen } from '../../store/hamburger-menu/hamburger-menu.store';
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
  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <HamburgerMenu>
          <HamburgerMenuIcon />
          {isHamburgerMenuOpen && <Sidebar />}
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
