import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipoMedico } from 'src/app/models/administracion/equipo-medico';

@Injectable({
  providedIn: 'root'
})
export class EquipoMedicoService {

  equipoMedico: EquipoMedico[];

  constructor(private http: HttpClient) { }

  getEquipoMedico(): Observable<EquipoMedico[]> {
    return this.http.get<EquipoMedico[]>('https://localhost:5001/api/equipomedicos');

  }

  sendData(ideq, nom, prov, cant) {
    return this.http.post('https://localhost:5001/api/equipomedicos', {
      idequipo: Number(ideq), nombre: nom, proveedor: prov, cantidad: Number(cant)}).subscribe(
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


  delete(llavePrimaria) {
    var ideq=Number(llavePrimaria);
    return this.http.delete('https://localhost:5001/api/equipomedicos/' + ideq).subscribe(
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


  modificar(llavePrimaria, ideq, nom, prov, cant) {
    return this.http.put('https://localhost:5001/api/equipomedicos/' + Number(llavePrimaria), {
       idequipo: Number(ideq), nombre: nom, proveedor: prov, cantidad: Number(cant) }).subscribe(
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
