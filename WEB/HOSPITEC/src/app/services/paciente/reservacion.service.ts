import { Injectable } from '@angular/core';
import { Reservacion } from 'src/app/models/paciente/reservacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {


  reservacion: Reservacion[];


  constructor(private http: HttpClient) { }

  getReservaciones(): Observable<Reservacion[]> {
    return this.http.get<Reservacion[]>('http://localhost:8081/api/reservacion');

  }

  sendData(reservacion, paciente, ingreso, salida, cama, procedimiento) {
    return this.http.post('http://localhost:8081/api/reservacion', {
      idReservacion: reservacion, idPaciente: paciente, ingreso: ingreso, salida: salida, nombreProcMedico: procedimiento,
      noCama: cama
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

    return this.http.delete('http://localhost:8081/api/reservacion/' + id).subscribe(
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


  modificar(id, reservacion, paciente, ingreso, salida, cama, procedimiento) {
    return this.http.put('http://localhost:8081/api/reservacion/' + id, {
      idHistorial: id,
      idReservacion: reservacion, idPaciente: paciente, ingreso: ingreso, salida: salida, nombreProcMedico: procedimiento,
      noCama: cama
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


