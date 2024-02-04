import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importe FormsModule et ReactiveFormsModule ici

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  // ... autres routes
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent
    // ... autres composants
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  // Importe ReactiveFormsModule ici
    RouterModule.forRoot(routes),
    HttpClientModule
    // ... autres modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
