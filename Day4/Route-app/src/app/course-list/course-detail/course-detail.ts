import { Component } from '@angular/core';

@Component({
  selector: 'course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail {
   course = {
    id: 1,
    name: 'Java Full Stack',
    duration: '6 Months',
    fees: 50000,
    seatsAvailable: 20,
    imageURL: 'https://cdn-icons-png.flaticon.com/512/919/919854.png'
  };

  getDiscountedPrice(): number {
    return this.course.fees * 0.9;
  }
}
