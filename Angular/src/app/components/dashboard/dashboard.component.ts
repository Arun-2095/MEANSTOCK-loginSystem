import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { User } from '../../interface/dataformat';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user: User;
showdata = false;

  constructor( private router: Router ,
               private auth: AuthService) { }


  ngOnInit() {
    this.auth.authenticateRoute().subscribe( (data) => {
      this.showdata = true;
      this.user = data ;
     },
     err => {
       console.log(err);
     });
  }
}
