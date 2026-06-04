import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  
  user = {
    name: '',
    email: '',
    mobile: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
