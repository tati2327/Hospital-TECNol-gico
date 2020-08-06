export class Salon {
    nosalon: string
    nombre: string;
    piso: string;
    tipomedicina: string;
    cantcamas: string;
  
    constructor(nosa, nom, pis, tipme, cantca) {
      this.nosalon = nosa;
      this.nombre = nom;
      this.piso = pis;
      this.tipomedicina = tipme;
      this.cantcamas = cantca;
    }
  }