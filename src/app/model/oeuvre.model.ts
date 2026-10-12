import { Genre } from './genre.model';

export class Oeuvre {
  idOeuvre?: number;
  titreOeuvre?: string;
  prixOeuvre?: number;
  dateCreation?: Date;
  genre!: Genre;
}