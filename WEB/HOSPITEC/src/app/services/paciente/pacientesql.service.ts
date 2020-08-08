import { Injectable } from '@angular/core';
import { PacienteSql } from 'src/app/models/paciente/pacientesql';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacienteSqlService {
  paciente: PacienteSql[];

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<PacienteSql[]> {
    return this.http.get<PacienteSql[]>('https://localhost:44354/api/pacienteCotecs');

  }

  sendData(ced, nom, ape, fecha, dir, nac, est, email, int, pat, med, uci) {
    return this.http.post('https://localhost:44354/api/pacienteCotecs', {
      numIdentificacion : ced, nombrePaciente : nom, apellidos : ape, nacimiento : fecha, region : dir, nacionalidad : nac,
      estado : est, email : email, internado : int, patologias : pat, medicamentos : med, uci : uci
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

    return this.http.delete('https://localhost:44354/api/pacienteCotecs/' + id).subscribe(
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


  modificar(ced, nom, ape, fecha, dir, nac, est, email, int, pat, med, uci) {
    return this.http.put('https://localhost:44354/api/pacienteCotecs/' + ced, {
      numIdentificacion: ced, nombrePaciente: nom, apellidos: ape, nacimiento: fecha, region: dir, nacionalidad: nac,
      estado: est, email: email, internado: int, patologias: pat, medicamentos: med, uci: uci
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
