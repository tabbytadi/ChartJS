import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '../data.service';
import * as DataActions from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadData),
      mergeMap(() =>
        this.dataService.getData().pipe(
          map(data => DataActions.loadDataSuccess({ data })),
          catchError(error => of(DataActions.loadDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) { }
}
