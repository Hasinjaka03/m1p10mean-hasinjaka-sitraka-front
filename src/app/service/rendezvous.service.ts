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
// <<<<<<< Updated upstream
//     // rendezvousData.service = new mongoose.Types.ObjectId(rendezvousData.service);

// =======
// >>>>>>> Stashed changes
    return this.http.post(`${this.baseUrl}/rendezvous`, rendezvousData);
  }

  // Fonction pour récupérer la liste des rendez-vous
  getRendezvousList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listerendezvous`);
  }

  getListRendezVous(idEmploye:string): Observable<any[]> {
    this.baseUrl='http://localhost:3000/employe/rendezvous/getAll/'+idEmploye ;
    console.log(this.baseUrl);
    return this.http.get<any[]>(this.baseUrl);
  }
}
