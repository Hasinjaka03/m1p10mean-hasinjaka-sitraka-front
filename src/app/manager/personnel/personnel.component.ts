import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { EmployeService } from 'src/app/service/employe.service';
import { LoginService } from 'src/app/service/login-admin.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  user!: Utilisateur;
  employes : any[] = [];
  inputEmploye: any = {};
  inputDebut : string ='08:00';
  inputFin : string ='17:00';
  iscreate : boolean = true ;
  inputDate : string = '';

  constructor(private user_serv : LoginService , private employe_serv : EmployeService ) { }

  ngOnInit(): void {
    this.user = this.user_serv.getCurrentUser('manager');
    this.employe_serv.getListeEmployee().subscribe(
      (employes) => {this.employes=employes}
    );
  }
  
  initialisee () :void {
    this.inputEmploye = {};
    this.inputDebut ='08:00';
    this.inputFin ='17:00';
    this.inputDate = '';
    this.iscreate = true ;
  }

  createEmploye() : void {
  //   // const[hours,minutes] = this.inputDure.split(':') ;
  //   this.inputService.duree = this.numberhours(this.inputDure);
  //   this.service_serv.ajoutService(this.inputService).subscribe(
  //     (service) => {console.log(service);
  //     this.services.push(service.serviceEnregistre)}
  //  );
    this.inputEmploye.dateNaissance = new Date(this.inputDate) ;
    this.inputEmploye.heureDebut = this.inputDebut.replace(':','h') ;
    this.inputEmploye.heureFin = this.inputFin.replace(':','h') ;
    this.inputEmploye.profil = "employe";
    this.employe_serv.ajoutEmploye(this.inputEmploye).subscribe(
        (employe) => {console.log(employe);
        this.employes.push(employe)}
      );

    // console.log(this.inputEmploye);
    this.initialisee () ;
    // this.inputService = {};
    // this.inputDure ='';
     
  }

  supprimerEmploye(idemploye : string) : void {
    this.employe_serv.deleteEmploye(idemploye).subscribe() ;
    // this.service_serv.getListeService().subscribe(
    //   (services) => {this.services=services}
    // );
    location.reload() ;
  }

  modifierEmploye() : void {
    this.inputEmploye.dateNaissance = new Date(this.inputDate) ;
    this.inputEmploye.heureDebut = this.inputDebut.replace(':','h') ;
    this.inputEmploye.heureFin = this.inputFin.replace(':','h') ;
    this.employe_serv.updateEmploye(this.inputEmploye,this.inputEmploye._id).subscribe(
    ) ;
    this.initialisee();
    // this.service_serv.getListeService().subscribe(
    //   (services) => {this.services=services}
    // );
    location.reload() ;
   
  }

  submitForm() :void {
    if(this.iscreate===false){
      this.modifierEmploye() ;
    }
    else {
      this.createEmploye() ;
    }
  }

  ismodified(employe : any):void{
    this.inputEmploye = employe ;
    this.inputDate = this.inputEmploye.dateNaissance.toString().split('T')[0] ;
    // console.log(this.inputDate);
    // console.log(this.inputEmploye.dateNaissance);
    this.inputDebut = this.inputEmploye.heureDebut.replace('h',':');
    this.inputFin = this.inputEmploye.heureFin.replace('h',':');
    this.iscreate = false ;
    // this.iscreate = false ; 
    // console.log(this.inputService);
}

}
