import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData } from '../store/actions';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data$: Observable<any>;

  constructor(private store: Store<{ data: any }>) {
    this.data$ = store.select('data');
  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
    this.data$.subscribe(state => {
      if (state.data) {
        new Chart('myChart', {
          type: 'bar',
          data: state.data,
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    });
  }
}
