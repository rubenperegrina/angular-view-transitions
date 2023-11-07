import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <button [routerLink]="'contact'">Contact</button>
    <button [routerLink]="'about'">About</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}