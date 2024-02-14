// inscription.component.ts
import { Component } from '@angular/core';
import { InscriptionService } from '../../service/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscription: any = {}; // Modèle pour stocker les données du formulaire

  constructor(private inscriptionService: InscriptionService) { }

  submitForm() {
    this.inscriptionService.ajouterUtilisateur(this.inscription).subscribe(
      () => {
        console.log('Utilisateur ajouté avec succès');
        // Réinitialiser le formulaire ou afficher un message de succès
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }
}
