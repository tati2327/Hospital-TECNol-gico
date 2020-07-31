export class HistorialClinico {
  idHistorial: number;
  fecha: string;
  procedimientoMedico: string;
  tratamiento: string;
  cedulaPaciente: string;
  cedulaPersonal: string;

  constructor(id, fecha, procedimiento, trat, paciente, personal) {
    this.idHistorial = id;
    this.fecha = fecha;
    this.procedimientoMedico = procedimiento;
    this.tratamiento = trat;
    this.cedulaPaciente = paciente;
    this.cedulaPersonal = personal;
  }

}
