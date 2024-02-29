import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = apiUrl + '/manager/service'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getServiceListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listeService`);
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
    const url : string = apiUrl+"/manager/service/getAll" ;
    return this.http.get<any[]>(url);
  }

  ajoutService(body: any): Observable<any> {
    const url : string = apiUrl+ "/manager/service/create" ;
    return this.http.post(url, body);
  }

  deleteService(idservice : string): Observable<any> {
    const url : string = apiUrl+"/manager/service/delete/"+idservice ;
    return this.http.delete(url);
  }

  updateService(body: any,idservice : string): Observable<any> {
    const url : string = apiUrl+"/manager/service/update/"+idservice ;
    return this.http.patch(url, body);
  }  

}
