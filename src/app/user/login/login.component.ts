import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, public modal: ModalService) { }

  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  login = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])

  loginForm = new FormGroup({
    login: this.login,
    password: this.password,
  })

  loginIn() {

    this.showAlert = true
    this.alertMsg = 'Please wait! Your account Logged in'
    this.alertColor = 'blue'

    const { login, password } = this.loginForm.value

    this.authService.signin(login, password).subscribe((res: any) => {
      
     
      this.router.navigate(['boards'])
      this.modal.toggleModal("auth");
    },
      (error) => {
        this.alertMsg = "Something went wrong, try again"
      })
  }

}
