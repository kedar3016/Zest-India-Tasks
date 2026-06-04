import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-main-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {
  mainMenuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact' },
    { label: 'Courses', path: '/courses' }
  ];
}
