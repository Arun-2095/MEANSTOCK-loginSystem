import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthguardService implements CanActivate {

  constructor(private auth: AuthService , private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

}
