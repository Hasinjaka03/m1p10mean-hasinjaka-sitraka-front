// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = {}; // Modèle pour stocker les informations de connexion

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        // Gérer la réponse du serveur (par exemple, stocker le token JWT dans le stockage local)
        console.log('Réponse du serveur :', response);
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }
}
