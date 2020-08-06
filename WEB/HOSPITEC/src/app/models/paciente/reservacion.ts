export class Reservacion {
  idreservacion: number;
  cedulapaciente: number;
  ingreso: string;
  salida: string;
  nocama: string;

  constructor(reservacion, paciente, ingreso, salida, cama, procedimiento) {
    this.idreservacion = reservacion;
    this.cedulapaciente = paciente;
    this.ingreso = ingreso;
    this.salida = salida;
    this.nocama = cama;
  }

}
