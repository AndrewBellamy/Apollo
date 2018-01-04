import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>
  error = new Subject()

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState
  }

  signup(email: string, password: string) {
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Signed Up!', value);
      this.error.next(null);
    })
    .catch(err => {
      this.error.next(''+err.message);
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('You\'re In!');
      this.error.next(null);
    })
    .catch(err => {
      this.error.next(''+err.message);
    });
  }

  logout() {
    this.firebaseAuth
    .auth
    .signOut();
  }
}
