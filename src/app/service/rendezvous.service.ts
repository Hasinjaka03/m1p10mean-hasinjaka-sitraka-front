import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private baseUrl = apiUrl ; // URL de votre API backend

  constructor(private http: HttpClient) { }

  // Fonction pour créer un nouveau rendez-vous
  createRendezvous(rendezvousData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/client/rendezvous`, rendezvousData);
  }

  // Fonction pour récupérer la liste des rendez-vous
  getRendezvousList(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/listerendezvous/${clientId}`);
  }

  payerRendezvous(rendezvousId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/client/payerRendezvous/${rendezvousId}`, {});
  }

  prochainRendezvous(clientId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/client/prochainRendezvous/${clientId}`, {});
  }

  getRendezvousparjour(mois: number, annee: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/manager/statistique/rendezvous/journalier?mois=${mois}&annee=${annee}`, {});
  }

  
}
