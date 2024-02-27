import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http'; // Pour utiliser HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './common/inscription/inscription.component';
import { LoginComponent } from './common/login/login.component';
import { EmployeListeComponent } from './pages/manager/statistique/employe-liste/employe-liste.component';
import { AuthGuard } from './guards/auth.guard';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { CreateDepenseComponent } from './pages/manager/create-depense/create-depense.component';
import { ListeDepenseComponent } from './pages/manager/liste-depense/liste-depense.component';



@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    ManagerLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FixedPluginModule,
    FooterModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
