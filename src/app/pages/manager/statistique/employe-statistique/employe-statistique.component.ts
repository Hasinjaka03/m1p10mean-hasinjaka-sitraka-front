import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
    selector: 'employe-statistique-cmp',
    templateUrl: 'employe-statistique.component.html'
})

export class EmployeStatistiqueComponent {

  public canvas : any;
  public ctx: any;
  public chartColor: any;
  public chartEmail: any;
  public chartHours: any;

    ngOnInit(){
 


      
      const speedCanvas = document.getElementById("speedChart") as HTMLCanvasElement | null;
      var dataFirst = {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var dataSecond = {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };

      var speedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [dataFirst, dataSecond]
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };


      if (speedCanvas) {
        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          hover: false,
          data: speedData,
          options: chartOptions
        });
      } else {
        console.error("Element with id 'speedChart' not found.");
      }
      
    }
}
