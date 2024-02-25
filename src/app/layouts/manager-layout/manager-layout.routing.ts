import { Routes } from '@angular/router';
import { EmployeListeComponent } from 'app/pages/manager/employe-liste/employe-liste.component';
import { CreateDepenseComponent } from 'app/pages/manager/create-depense/create-depense.component';
import { ListeDepenseComponent } from 'app/pages/manager/liste-depense/liste-depense.component';
import { EmployeStatistiqueComponent } from 'app/pages/manager/statistique/employe-statistique/employe-statistique.component';



export const ManagerLayoutRoutes: Routes = [
    { path: 'insert_depense',    component: CreateDepenseComponent },
    { path: 'liste_depense',    component: ListeDepenseComponent },
    { path: 'liste_employe',    component:  EmployeListeComponent},
    { path: 'statistique/employe/:id',    component:  EmployeStatistiqueComponent},
];