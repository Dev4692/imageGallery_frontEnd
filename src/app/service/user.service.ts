import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName = new Subject();

  

  constructor(private http: HttpClient,
    public router: Router) { }

  manageUser(userDetails: any) {
    let apiUrl = 'http://localhost:8080/api/user';  // It Point at the URL to web api
    return this.http.post(apiUrl, userDetails, httpOptions);
  }


  login(loginDetails: any): Observable<any> {
    let apiUrl = 'http://localhost:8080/api/user/login';  // URL to web api
    return this.http.post(apiUrl, loginDetails, httpOptions);
  }

  loggedIn(){
    return !!localStorage.getItem('token') // this will return true if token is present
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedOut(){
    localStorage.removeItem('token') // this will return true if token is present
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
