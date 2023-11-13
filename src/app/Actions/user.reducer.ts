import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from 'src/interfaces/User';
import { UserState } from 'src/interfaces/UserState';

export const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.signIn, UserActions.signUp, (state) => ({ ...state, loading: true })),
  on(UserActions.signInSuccess, UserActions.signUpSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
    loading: false,
  })),
  on(UserActions.signFailure, (state, { error }) => ({ ...state, error, loading: false }))
);