// employe-liste.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'app/service/employe.service';
import { RendezvousService } from 'app/service/rendezvous.service';


@Component({
  selector: 'app-employe-liste',
  templateUrl: './employe-liste.component.html',
  styleUrls: ['./employe-liste.component.css']
})
export class EmployeListeComponent implements OnInit {
  employees: any[] = [];
  mois: number;
  annee: number;
  years: number[];
  rendezvousjournalier: any[] =[];

  constructor(private rendezvousService : RendezvousService, private employeService: EmployeService,private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.years = this.generateYears(2019, 2024);
    this.getemployees();
    this.getMoisAnnee();
    this.getAverageWorkTime();
    this.getRendezvousJournalier();
  }

  getemployees(): void {
    this.employeService.getEmployeeListe()
      .subscribe(employees => this.employees = employees);
  }

  getMoisAnnee(){
    this.route.params.subscribe(params => {
      this.mois = params['mois'] ? +params['mois'] : 2; 
      this.annee = params['annee'] ? +params['annee'] : 2024; 
    });
  }

  generateYears(start: number, end: number): number[] {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  }

  getAverageWorkTime() {
    this.employeService.getTempsMoyen(this.mois, this.annee).subscribe(
      averageWorkTimes => {
        this.employees.forEach(employee => {
          const averageWorkTime = averageWorkTimes.find(item => item.employe === employee._id);
          if (averageWorkTime) {
            employee.averageWorkTime = averageWorkTime.tempsMoyenTravail;
          }
        });
      },
      error => {
        console.error('Error fetching average work time:', error);
      }
    );
  }

  getRendezvousJournalier(){
    this.rendezvousService.getRendezvousparjour(this.mois, this.annee).subscribe(
      data => {
        console.log(data)
        this.rendezvousjournalier=data;
      },
      error => {
        console.error('Error fetching average work time:', error);
      }
    );

  }

  updatestat(){
    this.getAverageWorkTime();
    this.getRendezvousJournalier();
  }

}
