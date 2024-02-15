import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:3000/services/'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getServiceListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
