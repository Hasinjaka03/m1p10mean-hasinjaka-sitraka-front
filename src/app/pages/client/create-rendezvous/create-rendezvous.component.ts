import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/service/service.service';
import { EmployeService } from 'app/service/employe.service';
import { RendezvousService } from 'app/service/rendezvous.service';


@Component({
  selector: 'app-create-rendezvous',
  templateUrl: './create-rendezvous.component.html',
  styleUrls: ['./create-rendezvous.component.css']
})
export class CreateRendezvousComponent implements OnInit {
  rendezvousData = {
    client: '',
    service: '',
    employee: '',
    date: null
  };

  services: any[] = []; // Liste des services
  employees: any[] = []; // Liste des employés

  constructor(
    private rendezvousService: RendezvousService,
    private serviceService: ServiceService,
    private employeeService: EmployeService
  ) {}

  ngOnInit() {
    this.getServices();
    this.getEmployees();
  }

  createRendezvous() {
    // Récupérer les données du client à partir du localStorage
    const clientDataString = localStorage.getItem('utilisateur');
    if (clientDataString) {
      const clientData = JSON.parse(clientDataString);
      this.rendezvousData.client = clientData; 

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

  getServices() {
    this.serviceService.getServiceListe().subscribe(
      (data: any[]) => {
        this.services = data;
      },
      error => {
        console.error('Erreur lors de la récupération de la liste des services :', error);
      }
    );
  }

  getEmployees() {
    this.employeeService.getEmployeeListe().subscribe(
      (data: any[]) => {
        this.employees = data;
      },
      error => {
        console.error('Erreur lors de la récupération de la liste des employés :', error);
      }
    );
  }
}
