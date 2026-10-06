import { Injectable } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {

  oeuvres: Oeuvre[];

  constructor() {
    this.oeuvres = [
      { idOeuvre: 1, titreOeuvre: "La Joconde", prixOeuvre: 850000000, dateCreation: new Date("01/14/1503") },
      { idOeuvre: 2, titreOeuvre: "La Nuit Étoilée", prixOeuvre: 100000000, dateCreation: new Date("06/01/1889") },
      { idOeuvre: 3, titreOeuvre: "Le Penseur", prixOeuvre: 28000000, dateCreation: new Date("01/01/1904") }
    ];
  }

  listeOeuvres(): Oeuvre[] {
    return this.oeuvres;
  }

  ajouterOeuvre(o: Oeuvre): void {
    this.oeuvres.push(o);
  }

  supprimerOeuvre(o: Oeuvre): void {
    const index = this.oeuvres.indexOf(o, 0);
    if (index > -1) {
      this.oeuvres.splice(index, 1);
    }
  }

  consulterOeuvre(id: number): Oeuvre {
    return this.oeuvres.find(o => o.idOeuvre == id)!;
  }

  updateOeuvre(o: Oeuvre): void {
    const index = this.oeuvres.findIndex(item => item.idOeuvre == o.idOeuvre);
    if (index !== -1) {
      this.oeuvres[index] = o;
    }
  }
}