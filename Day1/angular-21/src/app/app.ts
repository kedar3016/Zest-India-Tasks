import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Userform } from './userform/userform';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Home,Userform,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Kedar Mane"
  protected readonly title = signal('angular-21');
  getName(){
    this.name = "Raj"
    return this.name;
  }
  Add(a:number,b:number){
    return a+b;
  }
  counterValue = 0;
  counter(name:string){
    if(name =="add")
    this.counterValue++;
    else{
      this.counterValue--;
    }
  }

}
