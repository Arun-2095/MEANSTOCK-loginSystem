import { Injectable } from '@angular/core';
import {  HttpClient , HttpHeaders } from '@angular/common/http';

import { Dataformat } from '../interface/dataformat';
import { Observable , pipe} from 'rxjs';
import { User  } from '../interface/dataformat';
import { RegistrationData } from '../interface/dataformat';
import { RegistrationResponse } from '../interface/dataformat';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: string;
     user: string;

  constructor(private http: HttpClient) { }

private  Header = new HttpHeaders({ 'content-Type' : 'application/json'});

// checking the expiring time of jwt token

loggedIn(): boolean {
  const helper = new JwtHelperService();
  this.loadToken();
  return helper.isTokenExpired(this.authToken);
}

// Registering the User

registeringUser(user: RegistrationData): Observable<RegistrationResponse> {

  return this.http.post<RegistrationResponse>('user/registration' , user , { headers : this.Header } );
}

// Authenticating User
authenticateUser(user): Observable<Dataformat> {

  return this.http.post<Dataformat>('user/loginauthentication' , user , { headers : this.Header } );
}

storeUserData(token, user) {
localStorage.setItem('id_token', token);
localStorage.setItem('user', JSON.stringify(user));
this.authToken = token;
this.user = user ;
}

logOut() {
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}

// load token

loadToken() {
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}

// protecting the api using Jwt

authenticateRoute(): Observable<User> {
  this.loadToken();
  const  autherisedHeader = new HttpHeaders().set(
    'Authorization' , this.authToken
  ).set('content-Type' , 'application/json');
  return this.http.get<User>('user/profile' , { headers : autherisedHeader } );
}

}
