import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Photos } from "./photos/photos";

@Component({
  selector: 'app-root',
  imports: [Photos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Api-Call');
}
