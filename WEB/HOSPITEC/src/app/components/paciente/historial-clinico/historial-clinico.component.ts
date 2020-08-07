import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/paciente/historial-clinico.service';
import { HistorialClinico } from 'src/app/models/paciente/historial-clinico';
import { HistoriaMedicaService } from 'src/app/services/paciente/historia-medica.service';
import { HistoriaMedica } from 'src/app/models/paciente/historia-medica';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent implements OnInit {

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
