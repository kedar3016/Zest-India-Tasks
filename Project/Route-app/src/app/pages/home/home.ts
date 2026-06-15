import { Component, OnInit } from '@angular/core';
import { CourseList } from '../../course-list/course-list';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CourseList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const role = localStorage.getItem('role');
      if (role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (role === 'student') {
        this.router.navigate(['/student-dashboard']);
      }
    }
  }
}
