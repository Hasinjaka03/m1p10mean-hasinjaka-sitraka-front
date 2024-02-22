import { Routes } from '@angular/router';

import { CreateRendezvousComponent } from 'app/pages/client/create-rendezvous/create-rendezvous.component';
import { ListRendezvousComponent } from 'app/pages/client/liste-rendezvous/liste-rendezvous.component';


export const ClientLayoutRoutes: Routes = [
    { path: 'insert_rendezvous',    component: CreateRendezvousComponent },
    { path: 'rendezvous',    component: ListRendezvousComponent }
];