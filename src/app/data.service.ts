import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  results: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.results = db.list('items').valueChanges();
  }
}
