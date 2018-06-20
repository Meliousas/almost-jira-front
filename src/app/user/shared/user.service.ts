import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private router: Router) {}

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  registerUser(user: User) {
    const body = {
      username: user.username,
      password: user.password
    };

    return this.http.post(this.rootUrl + '/api/account/register', body);
  }

  authenticateUser(username, password) {
    const data = 'username=' + username + '&password=' + password;
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'});
    this.loggedIn.next(true);

    return this.http.post(this.rootUrl + '/api/account/login', data, {headers: reqHeader});
  }

  logout() {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }


}
