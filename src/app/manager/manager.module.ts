import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ServiceComponent } from './services/service.component';
import { PartageModule } from '../partage/partage.module';
import { HeurePipe } from '../pipes/heure.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceComponent,
    HeurePipe
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    PartageModule,
    FormsModule
  ]
})
export class ManagerModule { }
