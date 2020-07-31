export class Paciente {
  idPaciente: number
  cedula: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  nacimiento: string;
  direccion: string;
  tratamiento: string;
  patologias: string;


  constructor(id, ced, nom, ape, tel, fecha, dir, trat, pat) {
    this.idPaciente = id;
    this.cedula = ced;
    this.nombre = nom;
    this.apellidos = ape;
    this.telefono = tel;
    this.nacimiento = fecha;
    this.direccion = dir;
    this.tratamiento = trat;
    this.patologias = pat;
  }

}
