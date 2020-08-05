import { Injectable } from '@angular/core';
import { EvaluacionServicio } from 'src/app/models/paciente/evaluacion-servicio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionServicioService {

  evaluaciones: EvaluacionServicio[];


  constructor(private http: HttpClient) { }

  getEvaluaciones(): Observable<EvaluacionServicio[]> {
    return this.http.get<EvaluacionServicio[]>('https://localhost:44354/api/evaluacion');

  }

  sendData(aseo, trat,punt, coment) {
    return this.http.post('https://localhost:44354/api/evaluacion', {
      aseo: parseInt(aseo), trato: parseInt(trat), puntualidad: parseInt(punt), comentarios: coment
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

    return this.http.delete('http://localhost:8081/api/contacto/' + id).subscribe(
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


  modificar(id, aseo, trat, punt, coment) {
    return this.http.put('https://localhost:44354/api/evaluacion' + id, {
      Id: id, aseo: parseInt(aseo), trato: parseInt(trat), puntualidad: parseInt(punt), comentarios: coment
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

