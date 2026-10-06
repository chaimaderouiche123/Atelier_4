import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Oeuvre } from '../model/oeuvre.model';
import { OeuvreService } from '../services/oeuvre.service';

@Component({
  selector: 'app-add-oeuvre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-oeuvre.component.html',
  styleUrl: './add-oeuvre.component.css'
})
export class AddOeuvreComponent implements OnInit {

  newOeuvre = new Oeuvre();

  constructor(
    private oeuvreService: OeuvreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addOeuvre(): void {
    // Crée une copie propre de l'objet pour l'ajouter au service
    this.oeuvreService.ajouterOeuvre({ ...this.newOeuvre });
    // Redirige directement vers le tableau
    this.router.navigate(['oeuvres']);
  }
}