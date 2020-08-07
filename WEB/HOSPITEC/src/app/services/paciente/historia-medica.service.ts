import { Injectable } from '@angular/core';
import { HistoriaMedica } from 'src/app/models/paciente/historia-medica';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaMedicaService {


  historia: HistoriaMedica[];


  constructor(private http: HttpClient) { }

  getHistoria(): Observable<HistoriaMedica[]> {
    return this.http.get<HistoriaMedica[]>('https://localhost:44354/api/historiamedicas');

  }

  sendData(id, idh, fecha, proc, trat, ced ) {
    return this.http.post('https://localhost:44354/api/historiamedicas', {
      idhistoriamedica: parseInt(id), idhistorial: parseInt(idh), fechahistoria: fecha, nombreprocedimiento: proc, tratamiento: trat,
      cedulapersonal: ced
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

    return this.http.delete('https://localhost:44354/api/historiamedicas/' + id).subscribe(
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


  modificar(id, idh, fecha, proc, trat, ced ) {
    return this.http.put('https://localhost:44354/api/reservacions/' + id, {
      idhistoriamedica: parseInt(id), idhistorial: parseInt(idh), fechahistoria: fecha, nombreprocedimiento: proc, tratamiento: trat,
      cedulapersonal: ced
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


