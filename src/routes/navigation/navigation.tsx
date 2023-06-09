import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import PagePath from '../../components/page-path/page-path.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { selectProductIsLoading } from '../../store/product/product.selector';
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
  const productIsLoading = useSelector(selectProductIsLoading);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'></LogoContainer>
        <SearchBar />
        <NavLinks>
          <NavLink to='/shop'>КАТАЛОГ</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              ВЫЙТИ
            </NavLink>
          ) : (
            <NavLink to='/auth'>ВОЙТИ</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      {/* {!productIsLoading && <PagePath />} */}
      <Outlet />
    </>
  );
}

export default Navigation;
