import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientLayoutRoutes } from './client-layout.routing';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListRendezvousComponent } from 'app/pages/client/liste-rendezvous/liste-rendezvous.component';
import { CreateRendezvousComponent } from 'app/pages/client/create-rendezvous/create-rendezvous.component';
import { CreatePreferenceComponent } from 'app/pages/client/create-preference/create-preference.component';
import { ListPreferenceComponent } from 'app/pages/client/liste-preference/liste-preference.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    ListRendezvousComponent,
    CreateRendezvousComponent,
    CreatePreferenceComponent,
    ListPreferenceComponent
  ]
})

export class ClientLayoutModule {}
