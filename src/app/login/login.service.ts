// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/utilisateur';
  private utilisateur: any; // Utilisateur connecté

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  setUtilisateur(utilisateur: any) {
    this.utilisateur = utilisateur;
  }

  getUtilisateur() {
    return this.utilisateur;
  }
}
