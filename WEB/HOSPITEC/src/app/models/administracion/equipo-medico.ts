export class EquipoMedico {
    idEquipo: string
    nombre: string;
    proveedor: string;
    cantidad: string;
  
    constructor(idEq, nom, prov, cant) {
      this.idEquipo = idEq;
      this.nombre = nom;
      this.proveedor = prov;
      this.cantidad = cant;
    }
  
  }