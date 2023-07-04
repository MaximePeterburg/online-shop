import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HamburgerIcon } from '../../assets/hamburger-menu.svg';
import {
  selectIsHamburgerMenuOpen,
  switchIsHamburgerMenuOpen
} from '../../store/hamburger-menu/hamburger-menu.store';
import { HamburgerMenuIconContainer } from './hamburger-menu-icon.styles';
const HamburgerMenuIcon = () => {
  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(switchIsHamburgerMenuOpen(isHamburgerMenuOpen));
  };
  return (
    <HamburgerMenuIconContainer onClick={clickHandler}>
      <HamburgerIcon />
    </HamburgerMenuIconContainer>
  );
};
export default HamburgerMenuIcon;
