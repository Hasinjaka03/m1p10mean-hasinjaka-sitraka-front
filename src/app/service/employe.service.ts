// employe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = apiUrl + '/manager'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getEmployeeListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/liste_employe`);
  }

  statistiqueEmploye(id_employe: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/statistique/employe/${id_employe}`);
  }

  getTempsMoyen(mois: number, annee: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/statistique/employes/temps_moyen?mois=${mois}&annee=${annee}`);
  }
}
