import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ClientService } from 'src/app/service/client.service';
import { LoginService } from 'src/app/service/login-admin.service';
import { OffrespecService } from 'src/app/service/offrespec.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user!: Utilisateur;
  clients : any[] = [] ;
  insertEmail : any = {} ;
  message : boolean = false ;
  
  constructor(private user_serv : LoginService , private client_serv : ClientService , private offre_serv : OffrespecService) { 
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
    this.insertEmail.client = this.clientById(this.insertEmail.clientmail) ;
    this.insertEmail.date_envoi = new Date() ;
    //  this.offre_serv.ajouterOffre(this.insertEmail).subscribe(  
    // );
    
    Swal.fire({
      title: 'Chargement en cours...',
      html :'<div class="spinner-border" role="status"></div>',
      allowOutsideClick:false,
      showConfirmButton: false,
      didOpen: () => {
        setTimeout(() => {
          this.offre_serv.ajouterOffre(this.insertEmail).subscribe(  
            (response) => {
              this.message = response.success ;
              // console.log(response.statut);
            }
          );
          const success = this.message ;
          Swal.close() ;

          if (success) {
            Swal.fire({
              title:'Succès!',
              text: 'L\'ajout d\'offre spéciale a été effectuée avec succés.',
              icon:'success',
              showConfirmButton: true
            });
          } else {
            Swal.fire({
              title:'Erreur!',
              text: 'Une erreur s\'est produit lors de l\'opération.',
              icon:'error',
              showConfirmButton: true
            });
          }
        },5000);
      }
    
    });
  }

}
