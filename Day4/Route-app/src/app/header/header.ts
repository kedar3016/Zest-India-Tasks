import { Component } from '@angular/core';
import { TopMenu } from './top-menu/top-menu';
import { MainMenu } from './main-menu/main-menu';

@Component({
  selector: 'app-header',
  imports: [TopMenu,MainMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
