import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../service/validation.service' ;
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../service/auth.service' ;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   admin: string;
   password: string;
  constructor(
      private validater: ValidationService ,
      private flashmgs: NgFlashMessageService,
      private  auth: AuthService
      ) { }

  ngOnInit() {
  }

  getData() {
  const detail = {
    admin: this.admin,
    password: this.password
      };


  if (!this.validater.validateFileds(detail)) {
    this.flashmgs.showFlashMessage( {
      messages: ['Fill All Credentials'],
      dismissible: true,
      type: 'danger'
    } );

    return false;
  }

  // authenticate admin

}



}
