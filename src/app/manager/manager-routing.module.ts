import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../employee/login/login.component";
import { ServiceComponent } from "./services/service.component";
import { PersonnelComponent } from "./personnel/personnel.component";
import { ContactComponent } from "./contact/contact.component";
// import { SweetAlert2Module } from "sweetalert2/dist/sweetalert2.min.js"

const routes : Routes = [
    {path:'', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'personnel', component: PersonnelComponent},
    {path: 'contact', component: ContactComponent}
    // {path: 'tache_effectue', component: TacheEffectueComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }

