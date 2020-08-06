import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/paciente/historial-clinico.service';
import { HistorialClinico } from 'src/app/models/paciente/historial-clinico';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {

  constructor(public historialService: HistorialClinicoService) { }
  historialList: HistorialClinico[] = [];

  ngOnInit(): void {
    this.historialService.getHistorial(1).subscribe((pacientes) => {
      this.historialList = pacientes;
    })
  }

}
