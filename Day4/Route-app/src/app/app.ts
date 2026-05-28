import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Navbar,Footer,Sidebar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Route-app');
}
