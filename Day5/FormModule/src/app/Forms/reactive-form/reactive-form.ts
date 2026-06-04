import { Component } from '@angular/core';
import { FormControl, FormGroup,ValidationErrors, FormsModule, ReactiveFormsModule, Validators,AbstractControl } from '@angular/forms';
import { minLength } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
   signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.passwordStrengthValidator
    ])
  });

  passwordStrengthValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const value = control.value || '';

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(value);

    if (
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialCharacter
    ) {
      return null;
    }

    return {
      passwordStrength: true
    };
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
