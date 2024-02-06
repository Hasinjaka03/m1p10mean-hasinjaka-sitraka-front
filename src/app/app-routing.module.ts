import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component'; // Importer le composant d'inscription
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent }, // Configurer la route pour le composant d'inscription
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  // Ajouter d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
