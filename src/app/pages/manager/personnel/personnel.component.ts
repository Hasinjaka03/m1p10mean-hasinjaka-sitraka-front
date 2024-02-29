import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/models/utilisateur';
import { EmployeService } from 'app/service/employe.service';
import { LoginService } from 'app/service/login-admin.service';

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

  imageUrl: string | ArrayBuffer | null = null;

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
    this.imageUrl = null ;
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
    // if(this.imageUrl){
    //   this.inputEmploye.photo = this.imageUrl ;
    // }   
    this.inputEmploye.photo = this.imageUrl ;
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
    // if(this.imageUrl){
    //   this.inputEmploye.photo = this.imageUrl ;
    // }   
    // console.log(this.inputEmploye);
    // console.log(this.employes);
    this.inputEmploye.photo = this.imageUrl ;
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
    this.imageUrl = this.inputEmploye.photo ;
    // this.iscreate = false ; 
    // console.log(this.inputService);
  }

  // handleFileInput(event: any) {
  //   const file = event.target.files[0];
  //   this.readFileAsBase64(file);
  // }

  // handleDrop(event: any) {
  //   event.preventDefault();
  //   const file = event.dataTransfer.files[0];
  //   this.readFileAsBase64(file);
  // }

  // handleDragOver(event: any) {
  //   event.preventDefault();
  // }

  // readFileAsBase64(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.inputEmploye.photo = reader.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Ajouter des styles de survol si nécessaire
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Supprimer les styles de survol si nécessaire
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.handleFile(file);
      // console.log(this.imageUrl) ;
    }
  }

  handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      // console.log(this.imageUrl) ;
    };
    
    reader.readAsDataURL(file);
  }

  removePhoto(event:Event):void{
    event.preventDefault() ;
    this.imageUrl = null ;
  }

}
