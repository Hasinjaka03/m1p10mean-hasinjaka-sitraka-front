// employe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = 'http://localhost:3000/utilisateur/liste'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getEmployeeListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
