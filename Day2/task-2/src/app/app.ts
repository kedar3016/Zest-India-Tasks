import { NgFor, NgIf ,NgSwitch,NgSwitchCase,NgSwitchDefault} from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
import { StudentList } from './component/student-list/student-list';
import { CapitalizePipe } from './pipe/capitalize-pipe';
import { FormsModule,NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,CurrencyConvertorPipe,
    StudentList,CapitalizePipe,FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  num = 40;
  
  Change(value: number) {
    this.num = value;
    console.log(this.sum(this.num, 20));
  }
  sum(a: number, b: number) {
    return a + b;
  }

  show = false;

    Todo =["task1", "task2", "task3"];

    students = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 22 },
      { name: 'Charlie', age: 21 }
    ];

    block = 0;
    ChangeBlock(){
      if(this.block < 4){
      this.block++;}
      else{
        this.block = 0;
      }
    }
    color:String= "black";

    changeColor(value:String){
      this.color = value;
    }


  // Custom Pipe
  amount = 1000;

  name = 'kedar';
  name1 = '';

}
