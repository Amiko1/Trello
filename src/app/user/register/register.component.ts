import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private base_url = environment.base_url
  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  constructor(private http: HttpClient, private router: Router) {}
  
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  login = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  password = new  FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  
  
  

  registerForm = new FormGroup({
    name: this.name, 
    login: this.login,
    password: this.password,
    
    
  })

  register() {
    
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created.'
    this.alertColor = 'blue'

    this.http.post(`${this.base_url}/auth/signup`, this.registerForm.value).subscribe((res: any) => {
           this.alertMsg = "Congretulation You are registered, Go to log in" 
    })
  }
}
