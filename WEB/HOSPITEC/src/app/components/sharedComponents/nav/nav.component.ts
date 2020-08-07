import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService]
})
export class NavComponent implements OnInit {

  user;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(public authSvc:AuthService, private router:Router) { }

  async ngOnInit(){
  }

  async logout(){
    console.log(this.authSvc.getPosition());
    await this.authSvc.logout();
    this.router.navigate(['/login'])
  }
}
