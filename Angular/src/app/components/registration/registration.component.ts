import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms' ;
import { AuthService } from '../../service/auth.service' ;
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService ,
              private FlashMessage: NgFlashMessageService ,
              private router: Router ) { }

public user = new FormGroup({
      username :  new  FormControl('' , ),
      password :  new  FormControl(''),
      confirmPassword :  new  FormControl(''),
      phone :  new  FormControl(''),
      email :  new  FormControl('',  Validators.email),
});

getUserData() {
  const userDetail = this.user.value;

  this.auth.registeringUser(userDetail).subscribe((data) => {

    this.FlashMessage.showFlashMessage({
      messages: [data.mgs],
      dismissible: true,
      timeout: 2000,
      type: 'danger'
    });

    if (data.success === true) {
      this.router.navigate(['/dashboard']);
    }

  });
}
  ngOnInit() {
  }

}
