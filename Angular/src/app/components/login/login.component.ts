import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

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

   this.auth.authenticateAdmin(user).subscribe( data => {
     console.log(data);

     this.flashMessage.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: [data.mgs],
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true,
      // Time after which the flash disappears defaults to 2000ms
      timeout: 2000,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'danger'
    });

     if (data.mgs === 'success') {
      // this.flashMessage.showFlashMessage({
      //   messages: [data.mgs],
      //   dismissible: true,
      //   timeout: 2000,
      //   type: 'danger'
      // });
      this.auth.storeUserData(data.token , data.username);
      this.router.navigate(['/dashboard']);
    }

     });
  }



  ngOnInit() {
  }

}
