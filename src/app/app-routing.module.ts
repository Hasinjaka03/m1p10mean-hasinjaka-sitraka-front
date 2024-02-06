import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component'; // Importer le composant d'inscription


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent }, // Configurer la route pour le composant d'inscription
  // Ajouter d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
