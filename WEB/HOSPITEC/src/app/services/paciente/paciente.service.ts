import { Injectable } from '@angular/core';
import { Paciente } from 'src/app/models/paciente/paciente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  paciente: Paciente[];

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:8081/api/paciente');

  }

  sendData(ced, nom, ape, tel, fecha, dir, trat, pat) {
    return this.http.post('http://localhost:8081/api/paciente', {
      cedula: ced, nombre: nom, apellidos: ape, telefono: tel, nacimiento: fecha, direccion: dir, tratamiento: trat, patologias: pat
    }).subscribe(
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


  delete(id) {

    return this.http.delete('http://localhost:8081/api/paciente/' + id).subscribe(
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


  modificar(id, ced, nom, ape, tel, fecha, dir, trat, pat) {
    return this.http.put('http://localhost:8081/api/paciente/' + id, {
      idHistorial: id,
      cedula: ced, nombre: nom, apellidos: ape, telefono: tel, nacimiento: fecha, direccion: dir, tratamiento: trat, patologias: pat
    }).subscribe(
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
