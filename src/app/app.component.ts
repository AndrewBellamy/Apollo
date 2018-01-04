import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string
  password: string
  uid: string
  errorMessage

  constructor(public authService: AuthService) {
    //Binding uid to data service component
    this.authService.user.subscribe(val => {
      this.uid = val ? val.uid : null;
    })

    this.authService.error.subscribe(error => {
      console.log(error);
      this.errorMessage = error
    })
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
