// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000/utilisateur';
  private utilisateur: any; // Utilisateur connecté

  constructor(private http: HttpClient) { }
    login(email: string ,motDePasse : string) : Observable<Utilisateur> {
        const body = {email , motDePasse} ;
        return this.http.post<any>(`${this.baseUrl}/login`,body)
        .pipe(
            map(response => {
                // console.log(response);
                if(response.success){
                    // console.log(response.utilisateur) ;
                    return response.utilisateur as Utilisateur ;
                } else {
                    throw new Error(response.message);
                }
            }),
            catchError(error => {
                let errorMessage = 'Une erreur est survenue lors de la connexion.';
                if(error.error && error.error.message) {
                    errorMessage = error.error.message ;
                }
                return throwError(errorMessage);
            })
        )    
        ;
    }

    logout(profil:string): void{
        localStorage.removeItem(profil) ;
    }

    getCurrentUser(profil: string): Utilisateur {
        const currentuser = localStorage.getItem(profil);
        if(currentuser) {
            return JSON.parse(currentuser) as Utilisateur ;
        }
        return this.utilisateur ;
    }

}
