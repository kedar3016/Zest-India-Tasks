import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { Header } from './header/header';
import { CourseList } from './course-list/course-list';
import {Home} from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Header,CourseList,Home,RouterOutlet,RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Route-app');
}
