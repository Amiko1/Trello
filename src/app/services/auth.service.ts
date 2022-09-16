import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url = environment.base_url

  constructor(private http: HttpClient) { }

  signin(login: any, password: any) {
    return this.http.post(`${this.base_url}/auth/signin`, { login, password})
  }

  signup(name: any, login:any , password: any) {

    return this.http.post(`${this.base_url}/auth/signup`, {name, login, password})

  }
}
