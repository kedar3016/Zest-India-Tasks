import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../Models/Course';
import { CourseService } from '../../services/course.service';
import { Enrollment } from '../../Models/Enrollment';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css'
})
export class StudentDashboard implements OnInit {
  studentName = localStorage.getItem('studentName') || 'Student';
  enrolledEnrollments: Enrollment[] = [];
  availableCourses: Course[] = [];

  stats = {
    enrolledCount: 0,
    hoursDuration: 0,
    seatsRemaining: 0
  };

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // 1. Fetch Student personal enrollments
    this.enrollmentService.getMyEnrollments().subscribe({
      next: (enrollments) => {
        this.enrolledEnrollments = enrollments;
        this.stats.enrolledCount = enrollments.length;

        // 2. Fetch all courses catalog
        this.courseService.getCourses().subscribe({
          next: (courses) => {
            // Filter out courses that are already enrolled
            this.availableCourses = courses.filter(
              c => !this.enrolledEnrollments.some(e => e.courseId === c.id)
            );

            // Compute statistics (sum duration of enrolled courses, etc.)
            let durationSum = 0;
            this.enrolledEnrollments.forEach(e => {
              const matchedCourse = courses.find(c => c.id === e.courseId);
              if (matchedCourse) {
                durationSum += matchedCourse.duration;
              }
            });
            this.stats.hoursDuration = durationSum;
            this.stats.seatsRemaining = this.availableCourses.reduce((sum, c) => sum + (c.seatsAvailable || 0), 0);
          },
          error: (err) => {
            console.error('Failed to load courses catalog', err);
          }
        });
      },
      error: (err) => {
        console.error('Failed to load personal enrollments', err);
      }
    });
  }

  enroll(courseId: number): void {
    const userIdStr = localStorage.getItem('userId');
    if (!userIdStr) {
      alert('Session expired. Please log in again.');
      this.router.navigate(['/login']);
      return;
    }

    const enrollmentRequest = {
      userId: parseInt(userIdStr, 10),
      courseId: courseId,
      status: 'Active'
    };

    this.enrollmentService.createEnrollment(enrollmentRequest).subscribe({
      next: () => {
        alert('Enrolled in course successfully!');
        this.loadData();
      },
      error: (err) => {
        alert('Failed to enroll in course. Please try again.');
        console.error(err);
      }
    });
  }
}
