import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  dictionariesReadAction,
  dictionariesReadErrorAction,
  dictionariesReadSuccessAction,
} from 'app/store/dictionaries/dictionaries.actions';
import { catchError, exhaustMap, map, of, zip } from 'rxjs';

import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {
  ControlItem,
  Dictionaries,
  Dictionary,
  Item,
} from 'app/store/dictionaries/dictionaries.models';
import * as jsonCountries from 'assets/countries.json';

const documentToItem = (x: any): Item => ({ ...x });
const itemToControlItem = (x: Item): ControlItem => {
  return {
    value: x.id,
    label: x.name,
    icon: x?.icon,
  };
};
const addDictionary = (items: Item[]): Dictionary => {
  return {
    items,
    controlItems: [...items].map((item) => itemToControlItem(item)),
  };
};

@Injectable()
export class DictionariesEffect {
  firestore: Firestore = inject(Firestore);

  constructor(private actions$: Actions) {}
  getDictionaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dictionariesReadAction),
      exhaustMap(() =>
        zip(
          collectionData(collection(this.firestore, 'skills')).pipe(
            map((items): Item[] => {
              return items.map((x) => documentToItem(x));
            })
          ),
          collectionData(collection(this.firestore, 'qualifications')).pipe(
            map((items): Item[] => {
              return items.map((x) => documentToItem(x));
            })
          ),
          collectionData(collection(this.firestore, 'specializations')).pipe(
            map((items): Item[] => {
              return items.map((x) => documentToItem(x));
            })
          ),
          collectionData(collection(this.firestore, 'roles')).pipe(
            map((items): Item[] => {
              return items.map((x) => documentToItem(x));
            })
          ),
          of(
            (jsonCountries as any).default.map((country) => ({
              id: country.code.toUpperCase(),
              name: country.name,
              icon: {
                src: null,
                cssClass: 'fflag fflag-' + country.code.toUpperCase(),
              },
            }))
          )
        ).pipe(
          map(([skills, qualifications, specializations, roles, countries]) => {
            const dictionaries: Dictionaries = {
              skills: addDictionary(skills),
              qualifications: addDictionary(qualifications),
              specializations: addDictionary(specializations),
              roles: addDictionary(roles),
              countries: addDictionary(countries),
            };
            return dictionariesReadSuccessAction({ dictionaries });
          }),
          catchError((err) => of(dictionariesReadErrorAction(err.message)))
        )
      )
    )
  );
}
