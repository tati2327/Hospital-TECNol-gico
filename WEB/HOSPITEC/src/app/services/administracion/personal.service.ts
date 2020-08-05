import { Injectable } from '@angular/core';
import {Personal} from 'src/app/models/administracion/personal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  
  personal: Personal[];


  constructor(private http: HttpClient) { }

  getPersonal(): Observable<Personal[]> {
    return this.http.get<Personal[]>('https://localhost:5001/api/personals');

  }

  sendData(cedula, nombre,apellidos,telefono,nacimiento,direccion,ingreso,puesto,contraseña) {
    return this.http.post('https://localhost:5001/api/personals', { cedula:cedula,
      nombre: nombre, apellidos: apellidos, telefono:telefono, nacimiento:nacimiento, direccion:direccion,
    ingreso:ingreso, puesto:puesto, contrasena:contraseña}).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      });
  }


  delete(cedula) {

    return this.http.delete('https://localhost:5001/api/personals/' + cedula).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
  }


  modificar(llavePrimaria,cedula, nombre,apellidos,telefono,nacimiento,direccion,ingreso,puesto,contraseña) {
    return this.http.put('https://localhost:5001/api/personals/' + llavePrimaria, {cedula:cedula,
    nombre: nombre, apellidos: apellidos, telefono:telefono, nacimiento:nacimiento, direccion:direccion,
  ingreso:ingreso, puesto:puesto,contrasena:contraseña}).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body",
          val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      });

  } 

}
