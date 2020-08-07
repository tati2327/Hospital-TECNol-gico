import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, NgForm} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    puesto: new FormControl('')
  });
  constructor(private authSvc: AuthService) { }

  login(){
    const {email, password, puesto} = this.loginForm.value;
    var firebase = this.authSvc;
    firebase.login(email, password, puesto);
    console.log('Form', this.loginForm.value);
  }
  ngOnInit(): void {
  }

}
