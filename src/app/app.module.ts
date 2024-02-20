import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http'; // Pour utiliser HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './common/inscription/inscription.component';
import { LoginComponent } from './common/login/login.component';
import { EmployeListeComponent } from './employe-liste/employe-liste.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateRendezvousComponent } from './client/create-rendezvous/create-rendezvous.component';
import { ListRendezvousComponent } from './client/liste-rendezvous/liste-rendezvous.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    EmployeListeComponent,
    CreateRendezvousComponent,
    ListRendezvousComponent,
    AdminLayoutComponent
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
