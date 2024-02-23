import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/service/service.service';
import { EmployeService } from 'app/service/employe.service';
import { PreferenceService} from 'app/service/preference.service';


@Component({
  selector: 'app-create-preference',
  templateUrl: './create-preference.component.html',
  styleUrls: ['./create-preference.component.css']
})
export class CreatePreferenceComponent implements OnInit {
    preferenceData = {
    client: '',
    service: '',
    employee: '',
    type_preference: ''
  };

  services: any[] = []; // Liste des services
  employees: any[] = []; // Liste des employés
  type_preferences: any[] = [];
  showServiceInput: boolean = false;
showEmployeeInput: boolean = false;
  


  constructor(
    private preferenceService: PreferenceService,
    private serviceService: ServiceService,
    private employeeService: EmployeService
  ) {}

  ngOnInit() {
    this.getServices();
    this.getEmployees();
    this.getTypePreferences();
  }

  createPreference() {
    // Récupérer les données du client à partir du localStorage
    const clientDataString = localStorage.getItem('utilisateur');
    if (clientDataString) {
      const clientData = JSON.parse(clientDataString);
      this.preferenceData.client = clientData;
      
      if(this.preferenceData.employee==""){
        this.preferenceData.employee=null;
      }
      if(this.preferenceData.service==""){
        this.preferenceData.service=null;
      }

      this.preferenceService.createPreference(this.preferenceData).subscribe(
        () => {
          console.log('Preference ajoute avec succès');
          // Ajoutez ici la logique de redirection vers la page de liste des rendez-vous
        },
        error => {
          console.error('Erreur lors de l\'ajout de preference :', error);
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

  getTypePreferences(){
    this.type_preferences = ["Employe","Service"];
    
  }

  updateInputsVisibility() {
    // Reset visibility
    this.showServiceInput = false;
    this.showEmployeeInput = false;
  
    // Update based on selected type_preference
    if (this.preferenceData.type_preference === 'Service') {
      this.showServiceInput = true;
    } else if (this.preferenceData.type_preference === 'Employe') {
      this.showEmployeeInput = true;
    }
  }
}

