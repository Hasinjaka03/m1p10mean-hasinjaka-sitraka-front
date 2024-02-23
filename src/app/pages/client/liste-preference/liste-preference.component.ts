import { Component, OnInit } from '@angular/core';
import { PreferenceService } from 'app/service/preference.service';


@Component({
  selector: 'app-liste-preference',
  templateUrl: './liste-preference.component.html',
  styleUrls: ['./liste-preference.component.css']
})
export class ListPreferenceComponent implements OnInit {
  preferenceList: any[]=[];

  constructor(private preferenceService: PreferenceService) {}

  ngOnInit(): void {
    this.getPreferenceList();
  }

  getPreferenceList() {
    this.preferenceService.getPreferenceList().subscribe(
      (data: any[]) => {
        this.preferenceList = data;
      },
      error => {
        console.error('Erreur lors de la récupération des preference :', error);
      }
    );
  }

}
