import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import { first } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public position="";
  public user:User;
  constructor(public afAuth: AngularFireAuth) {

   }

  async login(email:string, password:string, position:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      this.position=position;
      console.log("SUCCESS", position);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  async register(email: string, password: string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      console.log("SUCCESS");
      return result;
    }
    catch(error){
      console.log(error);
    }

  }

  async logout(){
    this.position="";
    await this.afAuth.signOut();
  }


  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getPosition() {
    return this.position;
  }
}
