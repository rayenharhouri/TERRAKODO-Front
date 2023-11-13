

import { createAction, props } from '@ngrx/store';
import { User } from 'src/interfaces/User';


export const signIn = createAction('[User] Sign In', props<{ email: string; password: string }>());
export const signUp = createAction('[User] Sign Up', props<{ email: string; password: string; fullName: string }>());
export const signInSuccess = createAction('[User] Sign In Success', props<{ token: string }>());
export const signUpSuccess = createAction('[User] Sign Up Success', props<{ msg: string }>());
export const signFailure = createAction('[User] Sign Failure', props<{ error: string }>());