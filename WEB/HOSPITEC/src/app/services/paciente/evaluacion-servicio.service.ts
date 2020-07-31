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
    return this.http.get<EvaluacionServicio[]>('http://localhost:8081/api/contacto');

  }

  sendData(name, Apellido, contactId, age, nationality, address, pathologies, email) {
    return this.http.post('http://localhost:8081/api/contacto', {
      NombreContacto: name, Apellidos: Apellido, IdPaciente: 1, ID: contactId, direccion: address,
      Edad: parseInt(age), Nacionalidad: nationality, Patologias: pathologies, Email: email
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


  modificar(id, name, Apellido, contactoId, age, nationality, address, pathologies, email) {
    return this.http.put('http://localhost:8081/api/contacto/' + id, {
      IdContacto: id,
      NombreContacto: name, Apellidos: Apellido, IdPaciente: 1, ID: contactoId, direccion: address,
      Edad: parseInt(age), Nacionalidad: nationality, Patologias: parseInt(pathologies), Email: email
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

