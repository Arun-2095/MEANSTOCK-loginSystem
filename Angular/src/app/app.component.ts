import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService,
              private flashMessage: NgFlashMessageService,
              private router: Router) {}

  title = 'Angular';


logoutClick() {
  this.flashMessage.showFlashMessage({
    messages: ['you are Logged Out'],
    type: 'danger'
  });
  this.auth.logOut();
  this.router.navigate(['/login']);
}

}
