// employe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = 'http://localhost:3000/utilisateur'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getEmployeeListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/liste_employe`);
  }

  statistiqueEmploye(id_employe: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/statistique/employe/${id_employe}`);
  }
}
