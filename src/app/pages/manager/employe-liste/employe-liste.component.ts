// employe-liste.component.ts
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './employ-liste.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employe-liste',
  templateUrl: './employe-liste.component.html',
  styleUrls: ['./employe-liste.component.css']
})
export class EmployeListeComponent implements OnInit {
  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService,private router: Router) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getUtilisateurs()
      .subscribe(utilisateurs => this.utilisateurs = utilisateurs);
  }

}
