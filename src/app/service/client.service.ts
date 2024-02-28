// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:3000/utilisateur';
  private utilisateur: any; // Utilisateur connecté

  constructor(private http: HttpClient) { }
    
  getListeClient(): Observable<any[]> {
    const url  :string=this.baseUrl+'/getAllClient';
    return this.http.get<any[]>(url);
  }

}
