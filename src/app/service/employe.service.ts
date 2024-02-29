// employe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = apiUrl + '/manager'; // L'URL de votre API

  private url ='http://localhost:3000/manager/employe';

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
