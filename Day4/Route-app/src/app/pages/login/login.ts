import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    alert('Login Successful');

    this.router.navigate(['/home']);

  }

  goToSignup() {

    this.router.navigate(['/signup']);

  }
}
