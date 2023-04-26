import { createAction, props } from '@ngrx/store';
import { Dictionaries } from 'app/store/dictionaries/dictionaries.models';

export enum Types {
  READ = '[Dictionaries] Read: Start',
  READ_SUCCESS = '[Dictionaries] Read: Success',
  READ_ERROR = '[Dictionaries] Read: Error',
}

export const dictionariesReadAction = createAction(Types.READ);
export const dictionariesReadSuccessAction = createAction(
  Types.READ_SUCCESS,
  props<{ dictionaries: Dictionaries }>()
);
export const dictionariesReadErrorAction = createAction(
  Types.READ_ERROR,
  props<{ error: string }>()
);
