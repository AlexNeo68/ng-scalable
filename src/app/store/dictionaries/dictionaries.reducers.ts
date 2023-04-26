import { createReducer, on } from '@ngrx/store';
import {
  dictionariesReadAction,
  dictionariesReadErrorAction,
  dictionariesReadSuccessAction,
} from 'app/store/dictionaries/dictionaries.actions';
import { Dictionaries } from 'app/store/dictionaries/dictionaries.models';

export interface DictionariesState {
  entities: Dictionaries;
  loading: boolean;
  error: string;
}

const initialState: DictionariesState = {
  entities: null,
  loading: null,
  error: null,
};

export const DictionariesReducer = createReducer(
  initialState,
  on(dictionariesReadAction, (state: DictionariesState) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(dictionariesReadSuccessAction, (state: DictionariesState, action) => ({
    ...state,
    loading: false,
    entities: action.dictionaries,
  })),

  on(dictionariesReadErrorAction, (state: DictionariesState, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
