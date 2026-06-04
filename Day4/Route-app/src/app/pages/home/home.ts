import { Component } from '@angular/core';
import { CourseList } from '../../course-list/course-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CourseList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
