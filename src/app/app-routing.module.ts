import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { InscriptionComponent } from './common/inscription/inscription.component'; // Importer le composant d'inscription
// import { LoginComponent } from './common/login/login.component';
// import { EmployeListeComponent } from './employe-liste/employe-liste.component';
// import { AuthGuard } from './guards/auth.guard';
// import { ListRendezvousComponent } from './client/liste-rendezvous/liste-rendezvous.component';
// import { CreateRendezvousComponent } from './client/create-rendezvous/create-rendezvous.component';




// const routes: Routes = [
//   { path: 'inscription', component: InscriptionComponent },
//   { path: 'login', component: LoginComponent }, // Configurer la route pour le composant d'inscription
//   { path: 'rendezvous', component: ListRendezvousComponent }, // Configurer la route pour le composant d'inscription
//   { path: 'insert_rendezvous', component: CreateRendezvousComponent }, // Configurer la route pour le composant d'inscription
//   { path: 'employes', component: EmployeListeComponent /*,canActivate: [AuthGuard] */ },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
//   // Ajouter d'autres routes au besoin
// ];



import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { LoginComponent } from './common/login/login.component';
import { InscriptionComponent } from './common/inscription/inscription.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: '', component: ClientLayoutComponent, children: [{path: '',loadChildren: () => import('./layouts/client-layout/client-layout.module').then(x => x.ClientLayoutModule)}]},
  { path: '', component: ManagerLayoutComponent, children: [{path: '',loadChildren: () => import('./layouts/manager-layout/manager-layout.module').then(x => x.ManagerLayoutModule)}]},
  { path: '**', redirectTo: 'login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
