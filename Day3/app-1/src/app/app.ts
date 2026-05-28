import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserService } from './services/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  users = signal<any[]>([]);
  errorMessage = signal<string>("");
  isLoading = signal<boolean>(true);

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.isLoading.set(false);
      },

      error: (error) => {
        this.errorMessage.set("Failed to fetch users. Please try again later.");
        this.isLoading.set(false);
        console.error(error);
      }

});
  }
}
