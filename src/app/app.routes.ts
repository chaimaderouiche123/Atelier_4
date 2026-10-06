import { Routes } from '@angular/router';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { AddOeuvreComponent } from './add-oeuvre/add-oeuvre.component';
import { UpdateOeuvreComponent } from './update-oeuvre/update-oeuvre.component';

export const routes: Routes = [
  { path: "oeuvres", component: OeuvresComponent },
  { path: "add-oeuvre", component: AddOeuvreComponent },
  { path: "updateOeuvre/:id", component: UpdateOeuvreComponent },
  { path: "", redirectTo: "oeuvres", pathMatch: "full" }
];