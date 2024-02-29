import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { LoginService } from 'src/app/service/login-admin.service';
import { ServiceService } from 'src/app/service/service.service';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  user!: Utilisateur;
  services : any[] = [];
  inputService: any = {};
  inputDure : string ='';
  iscreate : boolean = true ;

  constructor(private user_serv : LoginService , private service_serv : ServiceService ) { }

  ngOnInit(): void {
    this.user = this.user_serv.getCurrentUser('manager');
    this.service_serv.getListeService().subscribe(
      (services) => {this.services=services}
    );
  }

  // listeService() : any[]{
  //   return this.services ;
  // }

  numberhours(dureString : string) : any{
    const[hours,minutes] = dureString.split(':') ;
    return parseInt(hours) +( parseInt(minutes) /60) ;
  }

  initialisee () :void {
    this.inputService = {};
    this.inputDure ='';
    this.iscreate = true ;
  }

  createService() : void {
    // const[hours,minutes] = this.inputDure.split(':') ;
    this.inputService.duree = this.numberhours(this.inputDure);
    this.service_serv.ajoutService(this.inputService).subscribe(
      (service) => {console.log(service);
      this.services.push(service.serviceEnregistre)}
   );
    // console.log(this.inputService);
    this.initialisee () ;
    // this.inputService = {};
    // this.inputDure ='';
     
  }

  supprimerService(idservice : string) : void {
    this.service_serv.deleteService(idservice).subscribe() ;
    // this.service_serv.getListeService().subscribe(
    //   (services) => {this.services=services}
    // );
    location.reload() ;
  }

  modifierService() : void {
    this.inputService.duree = this.numberhours(this.inputDure);
    this.service_serv.updateService(this.inputService,this.inputService._id).subscribe(
    ) ;
    this.initialisee();
    // this.service_serv.getListeService().subscribe(
    //   (services) => {this.services=services}
    // );
    location.reload() ;
   
  }

  formatheure (num : number) : string {
    const partieEntiere:number = Math.floor(num); // Obtient la partie entière
    const partieDecimale:number = (num - partieEntiere)*60; // Obtient la partie décimale
    return this.padZero(partieEntiere) + ':' + this.padZero(partieDecimale);
  }

  padZero(num : number) : string {
    return num<10 ? '0' + num : num.toString();
  }

  ismodified(service : any):void{
      this.inputService = service ;
      this.inputDure = this.formatheure(service.duree) ;
      this.iscreate = false ;
      // this.iscreate = false ; 
      // console.log(this.inputService);
  }

  submitForm() :void {
    if(this.iscreate===false){
      this.modifierService() ;
    }
    else {
      this.createService() ;
    }
  }

}
