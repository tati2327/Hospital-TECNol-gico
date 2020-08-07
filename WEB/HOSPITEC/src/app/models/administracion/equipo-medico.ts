export class EquipoMedico {
    idequipo: string
    nombre: string;
    proveedor: string;
    cantidad: string;
  
    constructor(ideq, nom, prov, cant) {
      this.idequipo = ideq;
      this.nombre = nom;
      this.proveedor = prov;
      this.cantidad = cant;
    }
  
  }