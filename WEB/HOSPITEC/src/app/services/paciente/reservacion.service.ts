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
    return this.http.get<Reservacion[]>('https://localhost:44354/api/reservacions');

  }

  sendData(reservacion, paciente, ingreso, salida, cama,) {
    return this.http.post('https://localhost:44354/api/reservacions', {
      idreservacion: reservacion, cedulapaciente: paciente, ingreso: ingreso, salida: salida, nocama: parseInt(cama)
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

    return this.http.delete('https://localhost:44354/api/reservacions/' + id).subscribe(
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


  modificar(reservacion, paciente, ingreso, salida, cama) {
    return this.http.put('https://localhost:44354/api/reservacions/' + reservacion, {
      idreservacion: reservacion, idPaciente: paciente, ingreso: ingreso, salida: salida,nocama: parseInt(cama)
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


