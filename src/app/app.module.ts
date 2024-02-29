import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http'; // Pour utiliser HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './common/inscription/inscription.component';
import { LoginComponent } from './common/login/login.component';


import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { ToastrModule } from 'ngx-toastr';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    ClientLayoutComponent,
    ManagerLayoutComponent,
    EmployeeLayoutComponent
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
