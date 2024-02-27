import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { LoginService } from 'src/app/service/login-admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user!: Utilisateur;
  
  constructor(private user_serv : LoginService) { 

  }

  ngOnInit(): void {
    this.user = this.user_serv.getCurrentUser('manager');
  }

}
