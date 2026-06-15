import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../Models/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | null = null;
  isEnrolled = false;
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('token');
    
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        const id = parseInt(idStr, 10);
        this.loadCourseDetails(id);
      }
    });
  }

  loadCourseDetails(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data) => {
        this.course = data;
        if (this.isLoggedIn) {
          this.checkEnrollmentStatus(id);
        }
      },
      error: (err) => {
        console.error('Failed to load course details', err);
      }
    });
  }

  checkEnrollmentStatus(courseId: number): void {
    this.enrollmentService.getMyEnrollments().subscribe({
      next: (enrollments) => {
        this.isEnrolled = enrollments.some(e => e.courseId === courseId);
      },
      error: (err) => {
        console.error('Failed to load user enrollments', err);
      }
    });
  }

  getDiscountedPrice(): number {
    return this.course ? this.course.fees * 0.9 : 0;
  }

  enroll(): void {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }

    const userIdStr = localStorage.getItem('userId');
    if (!userIdStr || !this.course) {
      return;
    }

    const request = {
      userId: parseInt(userIdStr, 10),
      courseId: this.course.id,
      status: 'Active'
    };

    this.enrollmentService.createEnrollment(request).subscribe({
      next: () => {
        alert('Enrolled successfully!');
        this.isEnrolled = true;
        if (this.course) {
          this.course.seatsAvailable--;
        }
      },
      error: (err) => {
        alert('Failed to enroll in the course.');
        console.error(err);
      }
    });
  }
}
