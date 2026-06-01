import { Component, EventEmitter } from '@angular/core';
import { Search } from './search/search';
import { Lists } from './lists/lists';
import { CourseDetail } from './course-detail/course-detail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'course-list',
  imports: [Search, Lists, CourseDetail,CommonModule,FormsModule],
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
  
  searchText:string = '';
  setSearchText(value:any){
    this.searchText = value;
  }

}
