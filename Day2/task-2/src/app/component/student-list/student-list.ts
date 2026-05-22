import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 21 }
  ]

  list = true;
}
