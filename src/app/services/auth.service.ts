import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators'
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../user/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url = environment.base_url
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signin(login: any, password: any) {
    return this.http.post<{ token: string }>(`${this.base_url}/auth/signin`, { login, password }).pipe(tap(resData => {
      const user = new User(resData.token, login);
      this.user.next(user);
      sessionStorage.setItem('userData', JSON.stringify(user))
    }))
  }

  signup(name: any, login: any, password: any) {

    return this.http.post<{ name: string, login: string, password: string }>(`${this.base_url}/auth/signup`, { name, login, password })

  }

  autoLogin() {
    const userData: {
      login: string,
      token: string
    } = JSON.parse(sessionStorage.getItem('userData'))

    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.login, userData.token)

    this.user.next(loadedUser)

  }

  logOut() {
    this.user.next(null)
    this.router.navigate([''])
    sessionStorage.clear();
  }
}
