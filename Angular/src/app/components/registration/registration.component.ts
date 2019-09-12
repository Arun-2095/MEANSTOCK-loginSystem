import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms' ;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

 user = new FormGroup({
      username :  new  FormControl('' , ),
      password :  new  FormControl(''),
      confirmPassword :  new  FormControl(''),
      phone :  new  FormControl(''),
      email :  new  FormControl('',  Validators.email),
});

getUserData() {
  console.log(this.user.value);
}
  ngOnInit() {
  }

}
