import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/interfaces/UserState';
import * as UserActions from 'src/app/Actions/user.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiUrl: string = "http://localhost:9090"

  constructor(private http: HttpClient, private store: Store<AppState>, private router : Router) { }

  login(_email: string, _password: string) {
    const url = `${this._apiUrl}/user/signin`;

    const body = {
      email: _email,
      password: _password
    };

    this.http.post(url, body).subscribe(
      (res: any) => {
        const token = res.token;
        console.log(token);
        this.store.dispatch(UserActions.signInSuccess({ token }));
        alert('SIGNIN SUCCESSFUL');
        localStorage.setItem("Token", token)
        this.router.navigate(['home'])
      },
      (err: any) => {
        this.store.dispatch(UserActions.signFailure({ error: 'Something went wrong' }));
        alert('Something went wrong');
      }
    );
  }

  signup(_fullname: string, _email: string, _password: string) {
    const url = `${this._apiUrl}/user/signup`;

    const body = {
      fullName: _fullname,
      email: _email,
      password: _password
    };

    this.http.post(url, body).subscribe(
      (res: any) => {
        const msg = res.message;
        this.store.dispatch(UserActions.signUpSuccess({ msg }));
        alert('SIGNUP SUCCESSFUL');
        this.router.navigate(['login'])
      },
      (err: any) => {
        this.store.dispatch(UserActions.signFailure({ error: 'Something went wrong' }));
        alert('Something went wrong');
      }
    );
  }
}