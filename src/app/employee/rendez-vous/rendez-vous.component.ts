import { isNgTemplate } from '@angular/compiler';
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
  searchTerm: string = '' ;

  constructor(private user_serv : LoginService  , private rendezvous_serv : RendezvousService ) {
    
   }

  ngOnInit(): void { 
    this.user = this.user_serv.getCurrentUser('employe');
    // console.log(this.user);
    this.rendezvous_serv.getListRendezVous(this.user._id).subscribe(
      rendezvous => {this.rendezvous = rendezvous ;
      // console.log(rendezvous);
      // console.log(this.rendezvous);
    }
    );
    // console.log(this.user._id);
    // console.log(this.rendezvous);
  }

  // Méthode pour formater la date au format "dd MMM yyyy HH:mm"
  formatDate(dateString: string, format: string): string {
    // Convertir la chaîne de caractères en un objet Date
    const dateObject = new Date(dateString);
  
    // Formater la date selon le format spécifié
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }

  filterFriendItems(): any[] {
    return this.rendezvous.filter(item => {
      const etatLower = item.etat ? 'terminé' : 'en cours';
      return (
        item.client.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.client.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.client.numeroTelephone.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.client.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.service.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      this.formatDate(item.date,'dd MMMM yyyy à HH:mm').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      etatLower.includes(this.searchTerm.toLowerCase())
      );
    }
      
    );
  }

}
