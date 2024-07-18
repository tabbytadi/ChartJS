import { createReducer, on } from '@ngrx/store';
import * as DataActions from './actions';

export interface State {
  data: any;
  error: any;
}

export const initialState: State = {
  data: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(DataActions.loadDataSuccess, (state, action) => ({
    ...state,
    data: action.data,
  })),
  on(DataActions.loadDataFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
