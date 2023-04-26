import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment.dev';

import { inject } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { dictionariesReadAction } from 'app/store/dictionaries';

interface Skill {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-scalable';
  production = environment.name;

  item$: Observable<any[]>;

  firestore: Firestore = inject(Firestore);

  constructor(private store: Store) {
    // this.item$ = collectionData(collection(this.firestore, 'roles'));
  }

  ngOnInit(): void {
    // this.item$.subscribe((data) => console.log(data));
    this.store.dispatch(dictionariesReadAction());
  }
}
