
export class EvaluacionServicio {
  Id: number;
  aseo: string;
  trato: string;
  puntualidad: string;
  comentarios: string;

  constructor(id, aseo, trato, puntualidad, comentarios) {
    this.Id = id;
    this.aseo = aseo;
    this.trato = trato;
    this.puntualidad = puntualidad;
    this.comentarios = comentarios;
  }

}

