import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { LoginService } from 'src/app/service/login-admin.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user : Utilisateur  ;

  constructor(private user_serv : LoginService  ) {
    this.user = this.user_serv.getCurrentUser('employe');
   }

  ngOnInit(): void {
  }

  onchangedate(value:string) {
    this.user.dateNaissance = new Date(value) ;

  }

}
