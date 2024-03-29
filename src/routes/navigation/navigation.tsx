import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import Footer from '../../components/footer/footer.component';
import HamburgerMenuIcon from '../../components/hamburger-menu-icon/hamburger-menu-icon.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectIsHamburgerMenuOpen } from '../../store/hamburger-menu/hamburger-menu.store';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  HamburgerMenu,
  HidebleLinkList,
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer
} from './navigation.styles';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutUser = () => {
    dispatch(signOutStart());
    navigate('/');
  };
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'></LogoContainer>
        <SearchBar />
        <NavLinks>
          <HidebleLinkList>
            {currentUser?.isAdmin && <NavLink to='/dashboard'>ПАНЕЛЬ УПРАВЛЕНИЯ</NavLink>}
            <NavLink to='/shop'>КАТАЛОГ</NavLink>
            {currentUser && <NavLink to='/orders'>ЗАКАЗЫ</NavLink>}
          </HidebleLinkList>
          {currentUser ? (
            <>
              <NavLink as='span' onClick={signOutUser}>
                ВЫЙТИ
              </NavLink>
            </>
          ) : (
            <NavLink to='/auth'>ВОЙТИ</NavLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinks>
        <HamburgerMenu>
          <HamburgerMenuIcon />
          {isHamburgerMenuOpen && <Sidebar />}
        </HamburgerMenu>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navigation;
