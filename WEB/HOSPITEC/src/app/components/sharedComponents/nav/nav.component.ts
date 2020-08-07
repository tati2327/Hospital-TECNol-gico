import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService]
})
export class NavComponent implements OnInit {

  public isLogged = false;
  puesto;
  constructor(private authSvc:AuthService) { }

  async ngOnInit(){
    console.log('navbar');
    const user = await this.authSvc.getCurrentUser();
    const puesto = this.authSvc.getPosition();
    if (user){
      this.isLogged = true;
      this.puesto = puesto;
      console.log('user', user);
    }
  }
}
