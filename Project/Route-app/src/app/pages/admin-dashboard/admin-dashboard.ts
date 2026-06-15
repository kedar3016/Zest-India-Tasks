import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../Models/Course';
import { CourseService } from '../../services/course.service';
import { Enrollment } from '../../Models/Enrollment';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {
  activeTab: string = 'dashboard';
  courses: Course[] = [];
  selectedCourse: Course | null = null;
  showModal = false;

  // Form Model
  courseForm = {
    name: '',
    duration: 0,
    fees: 0,
    seatsAvailable: 0,
    imageURL: ''
  };

  // Stats
  stats = {
    totalCourses: 0,
    totalSeats: 0,
    totalStudents: 0,
    avgFees: 0
  };

  // Backend Enrolled Students
  students: Enrollment[] = [];
  filteredStudents: Enrollment[] = [];
  studentSearch = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadEnrollments();
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
    if (tab === 'students') {
      this.filterStudents();
    }
  }

  filterStudents(): void {
    const q = this.studentSearch.trim().toLowerCase();
    if (!q) {
      this.filteredStudents = [...this.students];
    } else {
      this.filteredStudents = this.students.filter(s => 
        (s.studentName && s.studentName.toLowerCase().includes(q)) || 
        (s.studentEmail && s.studentEmail.toLowerCase().includes(q)) || 
        (s.courseName && s.courseName.toLowerCase().includes(q))
      );
    }
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.calculateStats();
      },
      error: (err) => {
        console.error('Failed to load courses', err);
      }
    });
  }

  loadEnrollments(): void {
    this.enrollmentService.getEnrollments().subscribe({
      next: (data) => {
        this.students = data;
        this.filterStudents();
        this.calculateStats();
      },
      error: (err) => {
        console.error('Failed to load enrollments', err);
      }
    });
  }

  calculateStats(): void {
    this.stats.totalCourses = this.courses.length;
    this.stats.totalSeats = this.courses.reduce((sum, c) => sum + (c.seatsAvailable || 0), 0);
    this.stats.totalStudents = this.students.filter(s => s.status === 'Active').length;
    
    const totalFeesSum = this.courses.reduce((sum, c) => sum + (c.fees || 0), 0);
    this.stats.avgFees = this.courses.length > 0 ? Math.round(totalFeesSum / this.courses.length) : 0;
  }

  openAddModal(): void {
    this.selectedCourse = null;
    this.courseForm = {
      name: '',
      duration: 0,
      fees: 0,
      seatsAvailable: 0,
      imageURL: ''
    };
    this.showModal = true;
  }

  openEditModal(course: Course): void {
    this.selectedCourse = course;
    this.courseForm = {
      name: course.name,
      duration: course.duration,
      fees: course.fees,
      seatsAvailable: course.seatsAvailable,
      imageURL: course.imageURL
    };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedCourse = null;
  }

  saveCourse(): void {
    if (this.selectedCourse) {
      // Update
      this.courseService.updateCourse(this.selectedCourse.id, this.courseForm).subscribe({
        next: () => {
          alert('Course updated successfully!');
          this.closeModal();
          this.loadCourses();
        },
        error: (err) => {
          alert('Failed to update course.');
          console.error(err);
        }
      });
    } else {
      // Create
      this.courseService.addCourse(this.courseForm).subscribe({
        next: () => {
          alert('Course added successfully!');
          this.closeModal();
          this.loadCourses();
        },
        error: (err) => {
          alert('Failed to add course.');
          console.error(err);
        }
      });
    }
  }

  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe({
        next: () => {
          alert('Course deleted successfully!');
          this.loadCourses();
        },
        error: (err) => {
          alert('Failed to delete course.');
          console.error(err);
        }
      });
    }
  }
}
