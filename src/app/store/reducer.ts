import { Action, createReducer, on } from '@ngrx/store';
import * as DataActions from './actions';

export const initialState = {
  data: null,
  error: null
};

const _dataReducer = createReducer(
  initialState,
  on(DataActions.loadDataSuccess, (state, { data }) => ({ ...state, data })),
  on(DataActions.loadDataFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: { data: null; error: null; } | undefined, action: Action<string>) {
  return _dataReducer(state, action);
}
