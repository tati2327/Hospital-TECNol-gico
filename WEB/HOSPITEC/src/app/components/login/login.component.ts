import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, NgForm} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';

declare var $: any;

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
    cedula: new FormControl('')
  });
  constructor(private authSvc: AuthService, private router: Router) { }

  async login(){
    const {email, password, cedula} = this.loginForm.value;
    var puesto = $("#loginForm input[type='radio']:checked").val();
    //var cedula = $(document.getElementById('cedula')).val();
    var firebase = this.authSvc;
    const user = await firebase.login(email, password, puesto,cedula);
    firebase.position=puesto;
    firebase.cedula=cedula;
    if (user){
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
  }

}
