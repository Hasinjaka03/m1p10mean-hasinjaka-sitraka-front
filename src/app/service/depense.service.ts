import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// ...


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  
  private baseUrl = apiUrl + '/manager'; // URL de votre API backend

  constructor(private http: HttpClient) { }

  // Fonction pour créer un nouveau rendez-vous
  createDepense(depenseData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajoutDepense`, depenseData);
  }

  // Fonction pour récupérer la liste des rendez-vous
  getDepenseList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listeDepense`);
  }


  
}
