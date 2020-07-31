export class Reservacion {
  idReservacion: number;
  idPaciente: number;
  ingreso: string;
  salida: string;
  nombreProcMedico: string;
  noCama: string;

  constructor(reservacion, paciente, ingreso, salida, cama, procedimiento) {
    this.idReservacion = reservacion;
    this.idPaciente = paciente;
    this.ingreso = ingreso;
    this.salida = salida;
    this.noCama = cama;
    this.nombreProcMedico = procedimiento;
  }

}
