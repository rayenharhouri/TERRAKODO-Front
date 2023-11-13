import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (private router : Router, private userService: UserService) {

  }
  title = "todoApp - Register"

  email!: string;
  password!: string;
  fullname!: string;

  signup() {
    // Implement the login logic here (e.g., send a request to the backend API)
    this.userService.signup(this.fullname, this.email, this.password);
  }
}
