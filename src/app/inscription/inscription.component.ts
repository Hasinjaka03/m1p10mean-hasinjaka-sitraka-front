import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from './inscription.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    numero: ['', Validators.required],
    profil: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private inscriptionService: InscriptionService) {}

  ngOnInit() {
    // Peut contenir des initialisations supplémentaires si nécessaires
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      // Envoie la demande d'inscription au backend
      this.inscriptionService.registerUser(this.inscriptionForm.value).subscribe(
        (response) => {
          console.log('Utilisateur enregistré avec succès !', response);
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur.', error);
        }
      );
    } else {
      // Affiche des messages d'erreur ou effectue d'autres actions
      console.log('Le formulaire n\'est pas valide.');
    }
  }
}
