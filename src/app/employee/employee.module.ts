import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { PartageModule } from '../partage/partage.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ProfilComponent } from './profil/profil.component';
import { EtatPipe } from '../pipes/etat.pipe';
import { TacheEffectueComponent } from './tache-effectue/tache-effectue.component';


@NgModule({
  declarations: [
    LoginComponent,
    RendezVousComponent,
    ProfilComponent,
    EtatPipe,
    TacheEffectueComponent 
  
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule ,
    PartageModule
   
  ]
})
export class EmployeeModule { }
