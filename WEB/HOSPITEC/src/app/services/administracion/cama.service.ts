import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cama } from 'src/app/models/administracion/cama';

@Injectable({
  providedIn: 'root'
})
export class CamaService {

  cama: Cama[];

  constructor(private http: HttpClient) { }

  getCamas(): Observable<Cama[]> {
    return this.http.get<Cama[]>('https://localhost:5001/api/camas');

  }

  sendData(noCa, tipCa, noSa, dispn) {
    return this.http.post('https://localhost:5001/api/camas', {
      nocama: noCa, tipo: tipCa, nosalon: noSa, disponibilidad: dispn
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


  delete(noCama) {
    return this.http.delete('https://localhost:5001/api/camas/' + noCama).subscribe(
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


  modificar(noCa, tipCa, noSa, dispn) {
    return this.http.put('https://localhost:5001/api/camas/' + noCa, {
      nocama: noCa, tipo: tipCa, nosalon: noSa, disponibilidad: dispn
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
