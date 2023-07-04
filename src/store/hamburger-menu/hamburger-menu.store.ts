import { AnyAction } from 'redux';
import { createSelector } from 'reselect';
import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { RootState } from '../store';

export enum HAMBURGER_MENU_ACTION_TYPES {
  SET_IS_HAMBURGER_MENU_OPEN = 'hamburger-menu/SET_IS_HAMBURGER_MENU_OPEN'
}
export const isHamburgerMenuOpen = (hamburgerMenuStatus = true): boolean => {
  return !hamburgerMenuStatus;
};
export type SetIsHamburgerMenuOpen = ActionWithPayload<
  HAMBURGER_MENU_ACTION_TYPES,
  boolean
>;
export const setIsHamburgerMenuOpen = withMatcher(
  (bool: boolean): SetIsHamburgerMenuOpen =>
    createAction(HAMBURGER_MENU_ACTION_TYPES.SET_IS_HAMBURGER_MENU_OPEN, bool)
);
export const switchIsHamburgerMenuOpen = (hamburgerMenuStatus: boolean) => {
  const newHamburgerMenuStatus = isHamburgerMenuOpen(hamburgerMenuStatus);
  return setIsHamburgerMenuOpen(newHamburgerMenuStatus);
};
export type HamburgerMenuState = {
  isHamburgerMenuOpen: boolean;
};
export const HAMBURGER_MENU_INITIAL_STATE: HamburgerMenuState = {
  isHamburgerMenuOpen: false
};
export const hamburgerMenuReducer = (
  state = HAMBURGER_MENU_INITIAL_STATE,
  action: AnyAction
) => {
  if (setIsHamburgerMenuOpen.match(action)) {
    return { ...state, isHamburgerMenuOpen: action.payload };
  }
  return state;
};

export const selectHamburgerMenuReducer = (state: RootState): HamburgerMenuState =>
  state.hamburgerMenu;
export const selectIsHamburgerMenuOpen = createSelector(
  [selectHamburgerMenuReducer],
  (hamburgerMenu) => hamburgerMenu.isHamburgerMenuOpen
);
