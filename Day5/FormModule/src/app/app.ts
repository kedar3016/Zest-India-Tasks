import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForm } from "./Forms/reactive-form/reactive-form";
import { TemplateForm as AppTemplateForm } from "./Forms/template-form/template-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveForm,AppTemplateForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FormModule');
}
