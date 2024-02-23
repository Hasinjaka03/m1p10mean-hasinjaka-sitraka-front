import { Routes } from '@angular/router';
import { CreatePreferenceComponent } from 'app/pages/client/create-preference/create-preference.component';

import { CreateRendezvousComponent } from 'app/pages/client/create-rendezvous/create-rendezvous.component';
import { ListPreferenceComponent } from 'app/pages/client/liste-preference/liste-preference.component';
import { ListRendezvousComponent } from 'app/pages/client/liste-rendezvous/liste-rendezvous.component';


export const ClientLayoutRoutes: Routes = [
    { path: 'insert_rendezvous',    component: CreateRendezvousComponent },
    { path: 'rendezvous',    component: ListRendezvousComponent },
    { path: 'insert_preference',    component: CreatePreferenceComponent },
    { path: 'liste_preference',    component: ListPreferenceComponent },
];