import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  constructor(private authService: AuthService) { }

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  login = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])

  registerForm = new FormGroup({
    name: this.name,
    login: this.login,
    password: this.password,
  })

  register() {

    if (!this.registerForm.valid) {
      return;
    }

    const { name, login, password } = this.registerForm.value;

    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created.'
    

    this.authService.signup(name, login, password).subscribe((res: any) => {
      this.alertMsg = "Congretulation You are registered, Go to log in"
    },
      (error) => {
        this.alertMsg = "Something went wrong, try again"
      })
  }
}
