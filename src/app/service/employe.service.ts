// employe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = 'http://localhost:3000/utilisateur/liste'; // L'URL de votre API

  private url ='http://localhost:3000/manager/employe';

  constructor(private http: HttpClient) { }

  getEmployeeListe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  updateEmployeById(employe : Utilisateur): Observable<any> {
    this.baseUrl=this.url+'/update/'+employe._id;
    // console.log(this.baseUrl);
    return this.http.patch<any[]>(this.baseUrl,employe);
  }; 

  getListeEmployee(): Observable<any[]> {
    const url  :string=this.url+'/getAll';
    return this.http.get<any[]>(url);
  }

  ajoutEmploye(body: any): Observable<any> {
    const url : string = this.url+"/create" ;
    return this.http.post(url, body);
  }

  updateEmploye(body: any,idEmploye : string): Observable<any> {
    const url : string = this.url+"/update/"+idEmploye ;
    return this.http.patch(url, body);
  }  

  deleteEmploye(idemploye : string): Observable<any> {
    const url : string = this.url+"/delete/"+idemploye ;
    return this.http.delete(url);
  }

}
