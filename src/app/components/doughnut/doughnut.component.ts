import { Component, OnInit, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html'
})
export class DoughnutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('titulo') title: string = "No tittle";

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Empty Label', 'Empty Label', 'Empty Label' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
        data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#02059' ]
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';


  // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

}
