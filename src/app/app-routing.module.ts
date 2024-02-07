import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component'; // Importer le composant d'inscription
import { LoginComponent } from './login/login.component';
import { EmployeListeComponent } from './employe-liste/employe-liste.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent }, // Configurer la route pour le composant d'inscription
  { path: 'employes', component: EmployeListeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  // Ajouter d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
