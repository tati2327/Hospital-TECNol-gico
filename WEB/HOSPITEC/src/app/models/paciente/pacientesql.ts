export class PacienteSql {
  numIdentificacion: string;
  nombrePaciente: string;
  apellidos: string;
  nacimiento: string;
  region: string;
  nacionalidad: string;
  estado: string;
  email: string;
  internado: string;
  patologias: string;
  medicamentos: string;
  uci: string;



  constructor(ced, nom, ape, fecha, dir, nac, est, email, int, pat, med, uci) {
    this.numIdentificacion = ced;
    this.nombrePaciente = nom;
    this.apellidos = ape;
    this.nacimiento = fecha;
    this.region = dir;
    this.nacionalidad = nac;
    this.estado = est;
    this.email = email;
    this.internado = int;
    this.patologias = pat;
    this.medicamentos = med;
    this.uci = uci;
  }

}

