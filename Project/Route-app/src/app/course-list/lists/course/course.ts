import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../Models/Course';
@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class CourseComponent {
  @Input() 
  course:Course;
  isBatchFull(seatsAvailable: number): boolean {
  return seatsAvailable === 0;
}
}
