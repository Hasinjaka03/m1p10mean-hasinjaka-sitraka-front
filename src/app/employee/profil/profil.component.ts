import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { LoginService } from 'src/app/service/login-admin.service';
import { EmployeService } from 'src/app/service/employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user! : Utilisateur  ;
  user_date! : string ;
  heureDebut : Date = new Date() ;
  heureFin : Date = new Date();
  
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private user_serv : LoginService , private router : Router, private employe_service : EmployeService ) {
    
   }

  ngOnInit(): void {
    this.user = this.user_serv.getCurrentUser('employe');
    const[hoursd,minutesd] = this.user.heureDebut.split('h');
    const[hoursf,minutesf] = this.user.heureFin.split('h');
    this.heureDebut.setHours(parseFloat(hoursd));
    this.heureDebut.setMinutes(parseFloat(minutesd));
    this.heureFin.setHours(parseFloat(hoursf));
    this.heureFin.setMinutes(parseFloat(minutesf));
    this.imageUrl = this.user.photo ;
  }

  updateDate(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // console.log(value);
    if (value) {
//       const parts = value.split('-');
// const year = parseInt(parts[0], 10);
// const month = parseInt(parts[1], 10) - 1; // Les mois sont indexés à partir de 0 (janvier = 0)
// const day = parseInt(parts[2], 10);

// const date = new Date(Date.UTC(year, month, day, 12, 0, 0)); // Heure réglée sur midi (12:00) et fuseau horaire sur UTC
// console.log();
const date = new Date(value); // Heure réglée sur midi (12:00) et fuseau horaire sur UTC
this.user.dateNaissance = date;
// this.user.dateNaissance = date;
      // if (!isNaN(date.getTime())) {
      //   this.user.dateNaissance = date;
      // } else {
      //   console.error('Invalid date format');
      // }
    }
  }

  transfDate (date : Date) : string {
    const datestring :string = date.toString() ;
    const parts = datestring.split('T');
    return parts[0];
  }

  updateutilisateur() {
      // console.log(this.user);
      this.user.photo = this.imageUrl ;
      this.employe_service.updateEmployeById(this.user).subscribe(
          (utilisateur) => {this.user = utilisateur ;
            localStorage.removeItem("employe") ;
            localStorage.setItem("employe",JSON.stringify(this.user)) ; }
      );
      // this.router.navigate(['/employee/liste_rd']);
      // this.router.navigate(['/employee/profil_employe']);
      // console.log(this.user);
      // location.reload();
  }

  onTimeChange(event: Event,heure : Date){
    const value = (event.target as HTMLInputElement).value;
    const[hours,minutes] = value.split(':');
    heure.setHours(parseFloat(hours));
    heure.setMinutes(parseFloat(minutes)) ;
    // console.log(heure.getHours().toString() + 'h' + heure.getMinutes().toString()  );
    // console.log(heure.getMinutes().toString());
  }

  padZero(num : number) : string {
    return num<10 ? '0' + num : num.toString();
  }

  updateHoraire () {
    this.user.heureDebut = this.padZero(this.heureDebut.getHours() )+ 'h' + this.padZero(this.heureDebut.getMinutes());
    this.user.heureFin = this.padZero(this.heureFin.getHours()) + 'h' + this.padZero(this.heureFin.getMinutes()) ;
    this.updateutilisateur() ;
    // console.log(this.user.heureDebut  );
    // console.log(this.user.heureFin  );
  }

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
