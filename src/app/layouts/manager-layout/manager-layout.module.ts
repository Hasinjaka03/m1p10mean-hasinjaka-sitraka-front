import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerLayoutRoutes } from './manager-layout.routing';
import { ListeDepenseComponent } from 'app/pages/manager/liste-depense/liste-depense.component';
import { CreateDepenseComponent } from 'app/pages/manager/create-depense/create-depense.component';
import { EmployeListeComponent } from 'app/pages/manager/employe-liste/employe-liste.component';
import { EmployeStatistiqueComponent } from 'app/pages/manager/statistique/employe-statistique/employe-statistique.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManagerLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    ListeDepenseComponent,
    CreateDepenseComponent,
    EmployeListeComponent,
    EmployeStatistiqueComponent
  ]
})

export class ManagerLayoutModule {}
