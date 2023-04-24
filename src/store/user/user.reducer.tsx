import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
  emailSignInStart,
  signUpFailed,
  signUpStart,
  signUpSuccess
} from './user.action';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const USER_INITIAL_STATE: UserState = {
  isLoading: false,
  error: null,
  currentUser: null
};
export const UserReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
  if (signUpFailed.match(action)) {
    return { ...state, error: action.payload };
  }
  return state;
};
