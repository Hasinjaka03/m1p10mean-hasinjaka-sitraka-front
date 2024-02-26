import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  private baseUrl = 'http://localhost:3000/client'; // URL de votre API backend

  constructor(private http: HttpClient) { }

  // Fonction pour créer un nouveau rendez-vous
  createPreference(preferenceData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajoutPreference`, preferenceData);
  }

  // Fonction pour récupérer la liste des rendez-vous
  getPreferenceList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listePreference`);
  }


  
}