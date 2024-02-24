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
  user : Utilisateur  ;
  user_date! : string ;
  

  constructor(private user_serv : LoginService , private router : Router, private employe_service : EmployeService ) {
    this.user = this.user_serv.getCurrentUser('employe');
   }

  ngOnInit(): void {
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
      this.employe_service.updateEmployeById(this.user).subscribe(
          (utilisateur) => {this.user = utilisateur ;
            localStorage.removeItem("employe") ;
            localStorage.setItem("employe",JSON.stringify(this.user)) ; }
      );
      // this.router.navigate(['/employee/liste_rd']);
      // this.router.navigate(['/employee/profil_employe']);
      // console.log(this.user);
      //  location.reload();
  }

}
