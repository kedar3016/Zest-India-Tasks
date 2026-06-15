import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TopMenu } from './top-menu/top-menu';
import { MainMenu } from './main-menu/main-menu';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [TopMenu, MainMenu, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router, private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return (localStorage.getItem('role') || '').toLowerCase() === 'admin';
  }

  logout(): void {
    this.authService.logout(false);
  }
}
