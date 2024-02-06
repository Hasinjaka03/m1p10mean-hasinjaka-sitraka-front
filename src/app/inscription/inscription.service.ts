// utilisateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private baseUrl = 'http://localhost:3000/api/utilisateurs'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  ajouterUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.baseUrl, utilisateur);
  }
}
