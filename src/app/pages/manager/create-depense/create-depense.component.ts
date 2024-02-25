import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'app/service/depense.service';

@Component({
  selector: 'app-create-depense',
  templateUrl: './create-depense.component.html',
  styleUrls: ['./create-depense.component.css']
})
export class CreateDepenseComponent implements OnInit {

 depenseData = {
    type_depense: '',
    montant: 0,
    date: null
  };

  type_depenses: string[]=[];

  constructor(
    private depenseService: DepenseService
  ) {}
  ngOnInit(): void {
    this.getType_depenses();
  }

  createdepense() {
      this.depenseService.createDepense(this.depenseData).subscribe(
        () => {
          console.log('Depense créé avec succès');
          // Ajoutez ici la logique de redirection vers la page de liste des Depense
        },
        error => {
          console.error('Erreur lors de la création du Depense :', error);
        }
      );
    }
    
    getType_depenses(){
      this.type_depenses=['Loyer','Salaire','Autres Depense']
    }
  }
