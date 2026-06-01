import { Component, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all:number = 0;
  @Input()
  available:number = 0
  @Input()
  full:number = 0;

  selectFilter:string = 'all';
}
