// utilisateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private baseUrl = apiUrl + '/utilisateur/inscription'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  ajouterUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.baseUrl, utilisateur);
  }
}
