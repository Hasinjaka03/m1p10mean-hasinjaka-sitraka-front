// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: 'mirado@gmail.com',
    motDePasse: 'mirado'
  }

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
<<<<<<< Updated upstream:src/app/common/login/login.component.ts
        // Gérer la réponse du serveur (par exemple, stocker le token JWT dans le stockage local)
        localStorage.setItem('utilisateur', JSON.stringify(response.utilisateur));
=======
        this.authService.setUtilisateur(response.utilisateur);
>>>>>>> Stashed changes:src/app/login/login.component.ts
        this.router.navigate(['/employes']);
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
}
