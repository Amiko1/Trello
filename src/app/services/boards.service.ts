import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardServices {

  base_url = environment.base_url
  constructor(private http: HttpClient) { }

  addBoard() {
    this.http.post(`${this.base_url}/auth/signup`, {})
  }
}
