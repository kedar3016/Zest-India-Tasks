import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course';
import { Filter } from "../filter/filter";
import { Course } from '../../Models/Course';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'lists',
  imports: [CommonModule, CourseComponent, Filter],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists implements OnInit {
  constructor(
  private router: Router,
  private courseService: CourseService
) {}
 selectedCourse :Course;

//  constructor(private router: Router) {}

//  courses = [
//   {
//     id: 1,
//     name: "Java Full Stack",
//     duration: "6 Months",
//     fees: 50000,
//     seatsAvailable: 20,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/919/919854.png"
//   },
//   {
//     id: 2,
//     name: "MERN Stack Development",
//     duration: "5 Months",
//     fees: 45000,
//     seatsAvailable: 0,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/919/919825.png"
//   },
//   {
//     id: 3,
//     name: "Python Full Stack",
//     duration: "6 Months",
//     fees: 48000,
//     seatsAvailable: 18,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
//   },
//   {
//     id: 4,
//     name: ".NET Full Stack",
//     duration: "6 Months",
//     fees: 50000,
//     seatsAvailable: 15,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png"
//   },
//   {
//     id: 5,
//     name: "Angular Development",
//     duration: "4 Months",
//     fees: 30000,
//     seatsAvailable: 30,
//     imageURL: "https://angular.io/assets/images/logos/angular/angular.png"
//   },
//   {
//     id: 6,
//     name: "React Development",
//     duration: "4 Months",
//     fees: 30000,
//     seatsAvailable: 28,
//     imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//   },
//   {
//     id: 7,
//     name: "Data Structures & Algorithms",
//     duration: "3 Months",
//     fees: 25000,
//     seatsAvailable: 35,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
//   },
//   {
//     id: 8,
//     name: "Cloud Computing (AWS)",
//     duration: "4 Months",
//     fees: 40000,
//     seatsAvailable: 22,
//     imageURL: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
//   },
//   {
//     id: 9,
//     name: "DevOps Engineering",
//     duration: "5 Months",
//     fees: 45000,
//     seatsAvailable: 20,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
//   },
//   {
//     id: 10,
//     name: "AI & Machine Learning",
//     duration: "6 Months",
//     fees: 60000,
//     seatsAvailable: 15,
//     imageURL: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png"
//   }
// ];
courses: Course[] = [];
// totalCourses = this.courses.length;
// availableCourses = this.courses.filter(course => course.seatsAvailable > 0).length;
// fullCourses = this.courses.filter(course => course.seatsAvailable === 0).length;
totalCourses = this.courses.length;

availableCourses =
  this.courses.filter(course => course.seatsAvailable > 0).length;

fullCourses =
  this.courses.filter(course => course.seatsAvailable === 0).length;
  @Input()
  searchText:string = '';

  selectedFilter:string = 'all';

  get filteredCourses() {
    const searchValue = this.searchText.trim().toLowerCase();

    return this.courses.filter(course =>
      this.matchesSearch(course, searchValue) && this.matchesFilter(course)
    );
  }

  matchesSearch(course: Course, searchValue: string): boolean {
    return searchValue === '' || course.name.toLowerCase().includes(searchValue);
  }

  matchesFilter(course: Course): boolean {
    if (this.selectedFilter === 'available') {
      return course.seatsAvailable > 0;
    }

    if (this.selectedFilter === 'full') {
      return course.seatsAvailable === 0;
    }

    return true;
  }

  setFilter(value:string) {
    this.selectedFilter = value;
  }

  isBatchFull(seatsAvailable: number): boolean {
  return seatsAvailable === 0;
}

  openRegisterPage(course: Course) {
    // this.selectedCourse = course;
    // this.router.navigate(['/register'], {
    //   queryParams: {
    //     course: course.name
    //   }
    // }
    this.router.navigate(
      ['/courses', course.id]
    );
  }
  

//new addon
ngOnInit(): void {

  this.courseService.getCourses()
    .subscribe({

      next: (data) => {
        this.courses = data;

        this.totalCourses = this.courses.length;

        this.availableCourses =
        this.courses.filter(c => c.seatsAvailable > 0).length;

        this.fullCourses =
        this.courses.filter(c => c.seatsAvailable === 0).length;
        

      },

      error: (err) => {

        console.error(err);

      }

    });

}

}
