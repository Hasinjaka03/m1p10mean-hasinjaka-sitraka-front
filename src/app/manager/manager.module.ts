import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ServiceComponent } from './services/service.component';
import { PartageModule } from '../partage/partage.module';
import { HeurePipe } from '../pipes/heure.pipe';
import { FormsModule } from '@angular/forms';
import { PersonnelComponent } from './personnel/personnel.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ServiceComponent,
    HeurePipe,
    PersonnelComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    PartageModule,
    FormsModule
  ]
})
export class ManagerModule { }
