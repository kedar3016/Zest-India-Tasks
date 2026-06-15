import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  imports: [FormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {
  course = {
  name: '',
  duration: 0,
  fees: 0,
  seatsAvailable: 0,
  imageURL: ''
};
}
