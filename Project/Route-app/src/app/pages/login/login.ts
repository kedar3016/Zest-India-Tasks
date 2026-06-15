import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = {
    email: '',
    password: ''
  };
  constructor(private authService:AuthService,private router:Router) { }

  login(){
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        this.authService.saveSession(response);
        alert('Login successful!');
        const userRole = (response.role || '').toLowerCase();
        if (userRole === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (userRole === 'student') {
          this.router.navigate(['/student-dashboard']);
        } else {
          this.router.navigate(['/']);
        }
        console.log(response);
      },

      error: (err) => {
        alert('Login failed!');
        console.error(err);
      }
    });
  }
}
