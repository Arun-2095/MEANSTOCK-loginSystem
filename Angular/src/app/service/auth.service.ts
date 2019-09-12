import { Injectable } from '@angular/core';
import {  HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
     user: any;

  constructor(private http: HttpClient) { }


private  Header = new HttpHeaders({ 'content-Type' : 'application/json'});


authenticateAdmin(user) {

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

authenticateRoute(){
  
}
}