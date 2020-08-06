import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/paciente/historial-clinico.service';
import { HistorialClinico } from 'src/app/models/paciente/historial-clinico';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent implements OnInit {

  constructor(public historialService: HistorialClinicoService) { }
  historialList: HistorialClinico[] = [];
  ngOnInit(): void {

    this.historialService.getHistorial().subscribe((pacientes) => {
      this.historialList = pacientes;
    })

  }

}
