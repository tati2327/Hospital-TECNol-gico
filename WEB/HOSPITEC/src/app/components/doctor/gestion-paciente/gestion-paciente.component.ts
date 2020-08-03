import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-paciente',
  templateUrl: './gestion-paciente.component.html',
  styleUrls: ['./gestion-paciente.component.css']
})
export class GestionPacienteComponent implements OnInit {

  pacienteX=[];
  constructor() { }

  ngOnInit(): void {
  }

}
