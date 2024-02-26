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

  createService() : void {
    // const[hours,minutes] = this.inputDure.split(':') ;
    this.inputService.duree = this.numberhours(this.inputDure);
    this.service_serv.ajoutService(this.inputService).subscribe(
      (service) => {console.log(service);
      this.services.push(service.serviceEnregistre)}
   );
    // console.log(this.inputService);
    this.inputService = {};
    this.inputDure ='';
     
  }

  supprimerService(idservice : string) : void {
    this.service_serv.deleteService(idservice).subscribe() ;
    this.service_serv.getListeService().subscribe(
      (services) => {this.services=services}
    );
  }
}
