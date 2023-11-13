import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router : Router, private userService: UserService) {

  }

  title = "todoApp - Login"

  email!: string;
  password!: string;

  login() {
    this.userService.login(this.email, this.password);
  }
}
