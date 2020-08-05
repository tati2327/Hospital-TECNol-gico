import { Injectable } from '@angular/core';
import { HistorialClinico } from 'src/app/models/paciente/historial-clinico';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialClinicoService {

  historial: HistorialClinico[];


  constructor(private http: HttpClient) { }

  getHistorial(): Observable<HistorialClinico[]> {
    return this.http.get<HistorialClinico[]>('https://localhost:44354/api/historialclinicos');

  }

  sendData(fecha, procedimiento, trat, paciente, personal) {
    return this.http.post('https://localhost:44354/api/historialclinicos', {
      fecha: fecha, procedimientoMedico: procedimiento, tratamiento: trat, cedulapaciente: paciente, cedulaPersonal: personal
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

    return this.http.delete('http://localhost:8081/api/historial/' + id).subscribe(
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


  modificar(id, fecha, procedimiento, trat, paciente, personal) {
    return this.http.put('https://localhost:44354/api/historialclinicos' + id, {
      idHistorial: id,
      fecha: fecha, procedimientoMedico: procedimiento, tratamiento: trat, cedulaPaciente: paciente, cedulaPersonal: personal
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

