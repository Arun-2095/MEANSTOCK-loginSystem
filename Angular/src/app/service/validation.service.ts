import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateFileds(user) {
    if (user.admin === undefined || user.password === undefined || user.password === '' ) {
       return false;
    } else {
      return true;
    }
  }
}
