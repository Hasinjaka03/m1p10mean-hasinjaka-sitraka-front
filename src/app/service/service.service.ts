import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:3000/manager/listeService/'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getServiceListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  //   const services=[
  //   {
  //       _id:'ajdsfli23',
  //       nom: 'Onglerie',
  //       duree: 5,
  //       tarif: 10000,
  //       commission: 30
  //   },
  //   {
  //     _id:'ajdsfli33',
  //     nom: 'Maquillage',
  //     duree: 54,
  //     tarif: 10000,
  //     commission: 20
  //   } 
  //   ];
  // return of(services);
  }

  getListeService() : Observable<any[]> {
    const url : string = "http://localhost:3000/manager/service/getAll" ;
    return this.http.get<any[]>(url);
  }

  ajoutService(body: any): Observable<any> {
    const url : string = "http://localhost:3000/manager/service/create" ;
    return this.http.post(url, body);
  }

  deleteService(idservice : string): Observable<any> {
    const url : string = "http://localhost:3000/manager/service/delete/"+idservice ;
    return this.http.delete(url);
  }

}
