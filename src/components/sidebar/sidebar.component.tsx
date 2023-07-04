import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from '../../routes/navigation/navigation.styles';
import {
  selectIsHamburgerMenuOpen,
  switchIsHamburgerMenuOpen
} from '../../store/hamburger-menu/hamburger-menu.store';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CloseButton, LinkList, SideBarContainer, SidebarLink } from './sidebar.styles';

const Sidebar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  const handleClose = () => {
    dispatch(switchIsHamburgerMenuOpen(isHamburgerMenuOpen));
  };
  return (
    <SideBarContainer>
      <LinkList>
        <SidebarLink to='/shop'>КАТАЛОГ</SidebarLink>
        {currentUser ? (
          <>
            <SidebarLink to='/orders'>ЗАКАЗЫ</SidebarLink>
            <SidebarLink as='span' onClick={signOutUser}>
              ВЫЙТИ
            </SidebarLink>
          </>
        ) : (
          <SidebarLink to='/auth'>ВОЙТИ</SidebarLink>
        )}
      </LinkList>
      <CloseButton as='span' onClick={handleClose}>
        Закрыть
      </CloseButton>
    </SideBarContainer>
  );
};

export default Sidebar;
