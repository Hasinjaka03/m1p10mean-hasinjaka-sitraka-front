import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/models/utilisateur';
import { ClientService } from 'app/service/client.service';
import { LoginService } from 'app/service/login-admin.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user!: Utilisateur;
  clients : any[] = [] ;
  insertEmail : any = {} ;
  
  constructor(private user_serv : LoginService , private client_serv : ClientService) { 
    // if(this.clients.length > 0){
    //   this.insertEmail.clientmail = this.clients[0]._id ;
    // }  
      this.insertEmail.subject = "Offre Spéciale" ;
  }

  ngOnInit(): void {
    this.user = this.user_serv.getCurrentUser('manager');
    this.client_serv.getListeClient().subscribe(
      clients => {this.clients = clients ;
    }
    );
  }

  clientById (idclient : string) : any {
    let reponse : any ;
    for (let i = 0 ; i< this.clients.length ; i++){
        if(this.clients[i]._id===idclient){
          reponse = this.clients[i] ;
          break ;
        }
    }
    return reponse ;
  }

  submitForm() {
    console.log(this.clientById(this.insertEmail.clientmail));
  }

}
