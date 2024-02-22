import { Component, OnInit } from '@angular/core';
import { RendezvousService } from 'app/service/rendezvous.service';


@Component({
  selector: 'app-liste-rendezvous',
  templateUrl: './liste-rendezvous.component.html',
  styleUrls: ['./liste-rendezvous.component.css']
})
export class ListRendezvousComponent implements OnInit {
  rendezvousList: any[]=[];

  constructor(private rendezvousService: RendezvousService) {}

  ngOnInit(): void {
    this.getRendezvousList();
  }

  getRendezvousList() {
    this.rendezvousService.getRendezvousList().subscribe(
      (data: any[]) => {
        this.rendezvousList = data;
      },
      error => {
        console.error('Erreur lors de la récupération de la liste des rendez-vous :', error);
      }
    );
  }

  payerRendezvous(rendezvousId: string): void {
    this.rendezvousService.payerRendezvous(rendezvousId).subscribe(
    () => {
      console.log('Rendez-vous payé');
      // Ajoutez ici la logique de redirection vers la page de liste des rendez-vous
    },
    error => {
      console.error('Erreur lors du payement du rendez-vous :', error);
    }
  );
    
  }
}
