// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = apiUrl + '/utilisateur';
  private utilisateur: any; // Utilisateur connecté

  constructor(private http: HttpClient) { }
    
  getListeClient(): Observable<any[]> {
    const url  :string=this.baseUrl+'/getAllClient';
    return this.http.get<any[]>(url);
  }

}
