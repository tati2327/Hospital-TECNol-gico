export class Cama {
    noCama: string
    tipoCama: string;
    noSalon: string;
    disponible: string;
  
    constructor(noCa, tipCa, noSa, dispn) {
      this.noCama = noCa;
      this.tipoCama = tipCa;
      this.noSalon = noSa;
      this.disponible = dispn;
    }
  }