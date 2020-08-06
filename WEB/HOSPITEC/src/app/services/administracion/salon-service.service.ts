import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from 'src/app/models/administracion/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  salon: Salon[];

  constructor(private http: HttpClient) { }

  getEquipoMedico(): Observable<Salon[]> {
    return this.http.get<Salon[]>('https://localhost:5001/api/salons');

  }

  sendData(nosa, nom, pis, tipme, cantca) {
    return this.http.post('https://localhost:5001/api/salons', {
      nosalon: nosa, nombre: nom, piso: pis, tipomedicina: tipme, cantcamas: cantca
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


  delete(nosalon) {
    return this.http.delete('https://localhost:5001/api/salons/' + nosalon).subscribe(
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


  modificar(nosa, nom, pis, tipme, cantca) {
    return this.http.put('https://localhost:5001/api/salons/' + nosa, {
      nosalon: nosa, nombre: nom, piso: pis, tipomedicina: tipme, cantcamas: cantca
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
