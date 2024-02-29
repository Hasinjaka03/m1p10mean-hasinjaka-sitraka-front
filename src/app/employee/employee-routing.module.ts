import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component" ;
import { RendezVousComponent } from "./rendez-vous/rendez-vous.component";
import { ProfilComponent } from "./profil/profil.component";
import { TacheEffectueComponent } from "./tache-effectue/tache-effectue.component";

const routes : Routes = [
    {path:'', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'liste_rd', component: RendezVousComponent},
    {path: 'profil_employe', component: ProfilComponent},
    {path: 'tache_effectue', component: TacheEffectueComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }

