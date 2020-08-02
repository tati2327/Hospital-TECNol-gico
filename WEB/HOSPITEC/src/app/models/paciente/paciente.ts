export class Paciente {
  cedula: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  nacimiento: string;
  direccion: string;
  tratamiento: string;
  patologias: string;
  doctorencargado: string;
  estado: string;
  contraseña: string;



  constructor(ced, nom, ape, tel, fecha, dir, trat, pat,dr,est,cont) {
    this.cedula = ced;
    this.nombre = nom;
    this.apellidos = ape;
    this.telefono = tel;
    this.nacimiento = fecha;
    this.direccion = dir;
    this.tratamiento = trat;
    this.patologias = pat;
    this.doctorencargado = dr;
    this.estado = est;
    this.contraseña = cont;
  }

}
