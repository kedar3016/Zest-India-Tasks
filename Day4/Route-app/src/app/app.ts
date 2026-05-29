import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { Header } from './header/header';
import { CourseList } from './course-list/course-list';
@Component({
  selector: 'app-root',
  imports: [Header,CourseList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Route-app');
}
