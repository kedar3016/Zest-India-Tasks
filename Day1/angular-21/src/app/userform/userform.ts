import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective} from '../directives/highlight';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [FormsModule,HighlightDirective],
  templateUrl: './userform.html',
  styleUrl: './userform.css',
})
export class Userform {

  user = {
    name: '',
    email: '',
    password: ''
  };
  submitForm() {
        console.log(this.user);
  }
}
