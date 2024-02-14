import { Component } from '@angular/core';
import { RendezvousService } from 'src/app/service/rendezvous.service';

@Component({
  selector: 'app-create-rendezvous',
  templateUrl: './create-rendezvous.component.html',
  styleUrls: ['./create-rendezvous.component.css']
})
export class CreateRendezvousComponent {
  rendezvousData = {
    client: '',
    service: '',
    employee: '',
    date: null
  };

  constructor(
    private rendezvousService: RendezvousService
  ) {}

  createRendezvous() {
    // Récupérer les données du client à partir du localStorage
    const clientDataString = localStorage.getItem('client');
    if (clientDataString) {
      const clientData = JSON.parse(clientDataString);
      this.rendezvousData.client = clientData.nom; // Supposant que vous stockez le nom du client dans le localStorage

      // Appeler le service pour créer le rendez-vous
      this.rendezvousService.createRendezvous(this.rendezvousData).subscribe(
        () => {
          console.log('Rendez-vous créé avec succès');
          // Ajoutez ici la logique de redirection vers la page de liste des rendez-vous
        },
        error => {
          console.error('Erreur lors de la création du rendez-vous :', error);
        }
      );
    } else {
      console.error('Aucune donnée client trouvée dans le localStorage');
    }
  }
}
