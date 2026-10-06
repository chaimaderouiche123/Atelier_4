import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Oeuvre } from '../model/oeuvre.model';
import { OeuvreService } from '../services/oeuvre.service';

@Component({
  selector: 'app-update-oeuvre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-oeuvre.component.html',
  styles: ``
})
export class UpdateOeuvreComponent implements OnInit {

  currentOeuvre = new Oeuvre();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private oeuvreService: OeuvreService
  ) {}

  ngOnInit(): void {
    this.currentOeuvre = this.oeuvreService.consulterOeuvre(
      this.activatedRoute.snapshot.params['id']
    );
  }

  updateOeuvre() {
    this.oeuvreService.updateOeuvre(this.currentOeuvre);
    this.router.navigate(['oeuvres']);
  }
}
