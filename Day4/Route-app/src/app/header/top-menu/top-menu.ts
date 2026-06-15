import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css',
})
export class TopMenu {
  isLoggedin():boolean{
    return localStorage.getItem('token') != null;
  }
  logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('role');
  }
  isAdmin(): boolean
{
   return localStorage.getItem('role') === 'Admin';
}
}
