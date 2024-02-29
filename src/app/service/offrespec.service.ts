// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OffrespecService {
  private baseUrl = 'http://localhost:3000/manager/offre';
  private utilisateur: any; // Utilisateur connecté

  constructor(private http: HttpClient) { }
    
  ajouterOffre(body:any): Observable<any> {
    const url  :string=this.baseUrl+'/create';
    return this.http.post(url, body)  
    ;
  }

}
