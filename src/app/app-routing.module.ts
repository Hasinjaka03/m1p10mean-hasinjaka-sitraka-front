import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { LoginComponent } from './common/login/login.component';
import { InscriptionComponent } from './common/inscription/inscription.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: '', component: ClientLayoutComponent, children: [{path: 'client',loadChildren: () => import('./layouts/client-layout/client-layout.module').then(x => x.ClientLayoutModule)}]},
  { path: '', component: ManagerLayoutComponent, children: [{path: 'manager',loadChildren: () => import('./layouts/manager-layout/manager-layout.module').then(x => x.ManagerLayoutModule)}]},
  { path: '', component: EmployeeLayoutComponent, children: [{path: 'employee',loadChildren: () => import('./layouts/employee-layout/employee-layout.module').then(x => x.EmployeeLayoutModule )}]},
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
