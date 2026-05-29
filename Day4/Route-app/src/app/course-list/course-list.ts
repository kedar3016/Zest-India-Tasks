import { Component } from '@angular/core';
import { Search } from './search/search';

@Component({
  selector: 'course-list',
  imports: [Search],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  course = {
        name : "java full stack",
        duration : "6 months",
        price : 30000,
        discount : 10,
        cImage : 'images/JavaLogo.png'
}
  getDiscountedPrice(){
    return this.course.price - (this.course.price * this.course.discount / 100);
  }

}
