import { createSelector } from '@ngrx/store';
import { State } from 'app/store';
import {
  Dictionaries,
  Dictionary,
} from 'app/store/dictionaries/dictionaries.models';
import { DictionariesState } from 'app/store/dictionaries/dictionaries.reducers';

export const dictionariesFeatureSelector = (state: State): DictionariesState =>
  state.dictionaries;

export const dictionariesSelector = createSelector(
  dictionariesFeatureSelector,
  (state: DictionariesState): Dictionaries => state.entities
);

export const dictionariesLoadingSelector = createSelector(
  dictionariesFeatureSelector,
  (state: DictionariesState): Boolean => state.loading
);

export const dictionariesErrorSelector = createSelector(
  dictionariesFeatureSelector,
  (state: DictionariesState): string => state.error
);

export const dictionariesIsReadySelector = createSelector(
  dictionariesFeatureSelector,
  (state: DictionariesState) => !state.loading && state.entities
);

export const dictionarySkillsSelector = createSelector(
  dictionariesSelector,
  (entities: Dictionaries): Dictionary => entities.skills
);
export const dictionaryQualificationsSelector = createSelector(
  dictionariesSelector,
  (entities: Dictionaries): Dictionary => entities.qualifications
);
export const dictionarySpecializationsSelector = createSelector(
  dictionariesSelector,
  (entities: Dictionaries): Dictionary => entities.specializations
);
export const dictionaryRolesSelector = createSelector(
  dictionariesSelector,
  (entities: Dictionaries): Dictionary => entities.roles
);
