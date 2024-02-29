import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { EmployeeLayoutRoutes } from './employee-layout.routing';
import { PartageModule } from 'app/partage/partage.module';
import { FormsModule } from '@angular/forms';
import { TacheEffectueComponent } from 'app/pages/employee/tache-effectue/tache-effectue.component';
import { EtatPipe } from 'app/pipes/etat.pipe';
import { ProfilComponent } from 'app/pages/employee/profil/profil.component';
import { RendezVousComponent } from 'app/pages/employee/rendez-vous/rendez-vous.component';


@NgModule({
  declarations: [
    RendezVousComponent,
    ProfilComponent,
    EtatPipe,
    TacheEffectueComponent 
  
  ],
  imports: [
    CommonModule,
    FormsModule ,
    PartageModule,
    RouterModule.forChild(EmployeeLayoutRoutes),
   
  ]
})
export class EmployeeLayoutModule { }
