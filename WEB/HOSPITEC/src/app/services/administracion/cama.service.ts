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

  sendData(noca, tipca, nosa, dispn) {
    return this.http.post('https://localhost:5001/api/camas', {
      nocama: Number(noca), tipo: tipca, nosalon: Number(nosa), disponibilidad: dispn}).subscribe(
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


  delete(nocama) {
    var nocam=Number(nocama);
    return this.http.delete('https://localhost:5001/api/camas/' + nocam).subscribe(
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


  modificar(llavePrimaria, noca, tipca, nosa, dispn) {
    return this.http.put('https://localhost:5001/api/camas/' + Number(llavePrimaria), {
      nocama: Number(noca), tipo: tipca, nosalon: Number(nosa), disponibilidad: dispn
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
