import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Dataformat } from '../../interface/dataformat';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private flashMessage: NgFlashMessageService,
    private router: Router ) { }


 login = new FormGroup({
  email : new FormControl('' , Validators.email),
  password : new FormControl('', Validators.minLength(3))
 });

 getUser() {
   const user = {
     email :  this.login.value.email,
    password : this.login.value.password
   };

   this.auth.authenticateUser(user).subscribe( (data: Dataformat ) => {
     this.flashMessage.showFlashMessage({
      messages: [data.mgs],
      dismissible: true,
      timeout: 2000,
      type: 'danger'
    });

     if (data.mgs === 'success') {
      this.auth.storeUserData(data.token , data.user);
      this.router.navigate(['/dashboard']);
    }

     });
  }



  ngOnInit() {
  }

}
