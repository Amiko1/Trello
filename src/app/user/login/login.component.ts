import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  constructor(private http: HttpClient, private router: Router, public modal: ModalService) { }

  private base_url = environment.base_url
  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'


  login = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  password = new  FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])

  
  
  
  registerForm = new FormGroup({
 
    login: this.login,
    password: this.password,
    
    
  })

  register() {
    
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account Logged in'
    this.alertColor = 'blue'

    this.http.post(`${this.base_url}/auth/signin`, this.registerForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      console.log(localStorage.getItem('token'));
      this.router.navigate(['tasks'])
      this.modal.toggleModal("auth");
    })
  }

}
