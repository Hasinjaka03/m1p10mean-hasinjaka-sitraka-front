import { Routes } from '@angular/router';
import { ProfilComponent } from 'app/pages/employee/profil/profil.component';
import { RendezVousComponent } from 'app/pages/employee/rendez-vous/rendez-vous.component';
import { TacheEffectueComponent } from 'app/pages/employee/tache-effectue/tache-effectue.component';



export const EmployeeLayoutRoutes: Routes = [
    {path: 'liste_rd', component: RendezVousComponent},
    {path: 'profil_employe', component: ProfilComponent},
    {path: 'tache_effectue', component: TacheEffectueComponent}
];