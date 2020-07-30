import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*ingresar(nameProduct, barCode, nameSeller, productDescrip, price, impuesto, descuento) {
    this.producto.ingresar(nameProduct.value, barCode.value, nameSeller.value, productDescrip.value, price.value, impuesto.value, descuento.value);

  }

  modificar(nameProduct, barCode, nameSeller, productDescrip, price, impuesto, descuento) {
    this.producto.modificar(2, nameProduct.value, barCode.value, nameSeller.value, productDescrip.value, price.value, impuesto.value, descuento.value);
  }

  borrar() {
    this.producto.borrar(1);

  }*/

}
