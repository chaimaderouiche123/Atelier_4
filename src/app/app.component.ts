import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oeuvres';

  // Variables pour gérer l'ouverture des menus déroulants
  isOeuvresOpen = false;
  isUserOpen = false;

  toggleOeuvres() {
    this.isOeuvresOpen = !this.isOeuvresOpen;
  }

  toggleUser() {
    this.isUserOpen = !this.isUserOpen;
  }
}