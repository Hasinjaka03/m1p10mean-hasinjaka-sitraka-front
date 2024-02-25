import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'app/service/depense.service';

@Component({
  selector: 'app-liste-depense',
  templateUrl: './liste-depense.component.html',
  styleUrls: ['./liste-depense.component.css']
})
export class ListeDepenseComponent implements OnInit {
  depenseList: any[]=[];


  constructor(private DepenseService: DepenseService) {}

  ngOnInit(): void {
      this.getDepenseList();
  }

  getDepenseList() {
    this.DepenseService.getDepenseList().subscribe(
      (data: any[]) => {
        this.depenseList = data;
      },
      error => {
        console.error('Erreur lors de la récupération de la liste des depense :', error);
      }
    );
  }
}



