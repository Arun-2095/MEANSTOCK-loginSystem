import { Injectable } from '@angular/core';
import {  HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dataformat } from '../interface/dataformat';
import { User  } from '../interface/dataformat';
import { RegistrationData } from '../interface/dataformat';
import { RegistrationResponse } from '../interface/dataformat';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: string;
     user: string;

  constructor(private http: HttpClient) { }


private  Header = new HttpHeaders({ 'content-Type' : 'application/json'});


// Registering the User

registeringUser(user: RegistrationData): Observable<RegistrationResponse> {

  return this.http.post<RegistrationResponse>('http://localhost:5000/user/registration' , user , { headers : this.Header } );
}

// Authenticating User
authenticateUser(user) {

  return this.http.post('http://localhost:5000/user/loginauthentication' , user , { headers : this.Header } );
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
  return this.http.get<User>('http://localhost:5000/user/profile' , { headers : autherisedHeader } );
}
}
