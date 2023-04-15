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

  constructor() {
    const itemCollection = collection(this.firestore, 'skills');
    this.item$ = collectionData(itemCollection);
  }

  ngOnInit(): void {
    this.item$.subscribe((data) => console.log(data));
  }
}
