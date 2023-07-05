import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsHamburgerMenuOpen,
  switchIsHamburgerMenuOpen
} from '../../store/hamburger-menu/hamburger-menu.store';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { LinkList, SideBarContainer, SidebarLink } from './sidebar.styles';

const Sidebar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        event.target instanceof Node &&
        !sidebarRef.current.contains(event.target)
      )
        dispatch(switchIsHamburgerMenuOpen(isHamburgerMenuOpen));
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <SideBarContainer ref={sidebarRef}>
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
    </SideBarContainer>
  );
};

export default Sidebar;
