import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { LoginService } from 'src/app/service/login-admin.service';
import { RendezvousService } from 'src/app/service/rendezvous.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  user!: Utilisateur;
  rendezvous : any[] = [];

  constructor(private user_serv : LoginService  , private rendezvous_serv : RendezvousService ) {
    
   }

  ngOnInit(): void { 
    this.user = this.user_serv.getCurrentUser('employe');
    // console.log(this.user);
    this.rendezvous_serv.getListRendezVous(this.user._id).subscribe(
      rendezvous => {this.rendezvous = rendezvous ;
      console.log(rendezvous);
      console.log(this.rendezvous);
    }
    );
    console.log(this.user._id);
    console.log(this.rendezvous);
  }

}
