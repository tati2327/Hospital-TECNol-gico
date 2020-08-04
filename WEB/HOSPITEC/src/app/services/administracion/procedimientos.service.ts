import { Injectable } from '@angular/core';
import { Procedimientos} from 'src/app/models/administracion/procedimientos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedimientosService { 
  
  procedimientos: Procedimientos[];


  constructor(private http: HttpClient) { }

  getProcedimientos(): Observable<Procedimientos[]> {
    return this.http.get<Procedimientos[]>('https://localhost:5001/api/procedimientomedicos');

  }

  sendData(nombre, recuperacionMinima) {
    return this.http.post('https://localhost:5001/api/procedimientomedicos', {
      nombre: nombre, recuperacionminima: Number(recuperacionMinima)}).subscribe(
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


  delete(nombre) {

    return this.http.delete('https://localhost:5001/api/procedimientomedicos/' + nombre).subscribe(
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


  modificar(nombre,recuperacionMinima) {
    return this.http.put('https://localhost:5001/api/procedimientomedicos/' + nombre, {
      nombre: nombre,recuperacionminima: Number(recuperacionMinima)}).subscribe(
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
