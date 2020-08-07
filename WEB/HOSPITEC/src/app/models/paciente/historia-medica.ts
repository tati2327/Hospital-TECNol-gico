export class HistoriaMedica {
  idhistoriamedica: number;
  idhistorial: number;
  fechahistoria: string;
  nombreprocedimiento: string;
  tratamiento: string;
  cedulapersonal: string;

  constructor(id, idh, fecha, proc, trat, ced) {
    this.idhistorial = id;
    this.idhistorial = idh;
    this.fechahistoria = fecha;
    this.nombreprocedimiento = proc;
    this.tratamiento = trat;
    this.cedulapersonal = ced;
  }

}

