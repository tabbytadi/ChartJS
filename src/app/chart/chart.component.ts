import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../store/reducer';
import { loadData } from '../store/actions';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data$: Observable<any>;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true,
      position: 'top'
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [];

  constructor(private store: Store<{ data: State }>) {
    this.data$ = store.pipe(select('data'));
  }

  ngOnInit() {
    this.store.dispatch(loadData());

    this.data$.subscribe(state => {
      if (state.data) {
        this.barChartLabels = state.data.labels;
        this.barChartData = state.data.datasets;
      }
    });
  }
}
