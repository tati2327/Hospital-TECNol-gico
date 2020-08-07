import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/paciente/historial-clinico.service';
import { HistorialClinico } from 'src/app/models/paciente/historial-clinico';

import { of } from 'rxjs';
import { HistoriaMedicaService } from 'src/app/services/paciente/historia-medica.service';
import { HistoriaMedica } from 'src/app/models/paciente/historia-medica';
declare var $: any;

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {

  constructor(public historialService: HistorialClinicoService, public historia: HistoriaMedicaService) { }
  historialList: HistorialClinico[] = [];
  historiaList: HistoriaMedica[] = [];
  ngOnInit(): void {

    this.historialService.getHistorial().subscribe((historias) => {
      this.historialList = historias;
    })

    this.historia.getHistoria().subscribe((historia) => {
      this.historiaList = historia;
    })
  }
}
