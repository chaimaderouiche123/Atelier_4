import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Oeuvre } from '../model/oeuvre.model';
import { Genre } from '../model/genre.model';
import { OeuvreService } from '../services/oeuvre.service';

@Component({
  selector: 'app-add-oeuvre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-oeuvre.component.html',
  styleUrl: './add-oeuvre.component.css'
})
export class AddOeuvreComponent implements OnInit {

  newOeuvre = new Oeuvre();
  genres!: Genre[];
  newIdGenre!: number;
  newGenre!: Genre;

  constructor(
    private oeuvreService: OeuvreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.genres = this.oeuvreService.listeGenres();
  }

  addOeuvre(): void {
    this.newGenre = this.oeuvreService.consulterGenre(this.newIdGenre);
    this.newOeuvre.genre = this.newGenre;
    this.oeuvreService.ajouterOeuvre(this.newOeuvre);
    this.router.navigate(['oeuvres']);
  }
}