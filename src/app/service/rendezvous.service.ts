import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private baseUrl = 'http://localhost:3000/client'; // URL de votre API backend

  constructor(private http: HttpClient) { }

  // Fonction pour créer un nouveau rendez-vous
  createRendezvous(rendezvousData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rendezvous`, rendezvousData);
  }

  // Fonction pour récupérer la liste des rendez-vous
  getRendezvousList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listerendezvous`);
  }

  payerRendezvous(rendezvousId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/payerRendezvous/${rendezvousId}`, {});
  }

  prochainRendezvous(clientId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/prochainRendezvous/${clientId}`, {});
  }

  
}
