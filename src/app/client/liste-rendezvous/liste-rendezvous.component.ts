import { Component, OnInit } from '@angular/core';
import { RendezvousService } from 'src/app/service/rendezvous.service';


@Component({
  selector: 'app-list-rendezvous',
  templateUrl: './list-rendezvous.component.html',
  styleUrls: ['./list-rendezvous.component.css']
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
}
