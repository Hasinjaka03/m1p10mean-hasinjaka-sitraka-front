import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './common/inscription/inscription.component'; // Importer le composant d'inscription
import { LoginComponent } from './common/login/login.component';
import { EmployeListeComponent } from './employe-liste/employe-liste.component';
import { AuthGuard } from './guards/auth.guard';
import { ListRendezvousComponent } from './client/liste-rendezvous/liste-rendezvous.component';
import { CreateRendezvousComponent } from './client/create-rendezvous/create-rendezvous.component';






const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent }, // Configurer la route pour le composant d'inscription
  { path: 'rendezvous', component: ListRendezvousComponent }, // Configurer la route pour le composant d'inscription
  { path: 'insert_rendezvous', component: CreateRendezvousComponent }, // Configurer la route pour le composant d'inscription
  { path: 'employes', component: EmployeListeComponent /*,canActivate: [AuthGuard] */ },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Ajouter d'autres routes au besoin
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
