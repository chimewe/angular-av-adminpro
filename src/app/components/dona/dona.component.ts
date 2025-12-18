import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  standalone: false,
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
  @Input() title: string = 'Sin título';

  @Input('labels') doughnutChartLabels: string[] = [
    'Pan',
    'Refresco',
    'Tacos',
  ];
  
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [10, 15, 40],
        backgroundColor: [
          '#f70c0cff',
          '#36a2eb',
          '#ffdd20ff'
        ],
        borderColor: '#ffffff',
        borderWidth: 10
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
