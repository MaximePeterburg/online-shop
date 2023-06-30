import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import { signInFailed, signInSuccess, signOutSuccess, signUpFailed } from './user.action';

export type UserState = {
  readonly currentUser: (UserData & { id: string }) | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const USER_INITIAL_STATE: UserState = {
  isLoading: false,
  error: null,
  currentUser: null
};
export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (signUpFailed.match(action)) {
    return { ...state, error: action.payload };
  }
  if (signInFailed.match(action)) {
    return { ...state, error: action.payload };
  }
  return state;
};
