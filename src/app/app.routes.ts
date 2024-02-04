import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to /login by default
  { path: '**', redirectTo: '/login' } // Redirect to /login for any other route
];
