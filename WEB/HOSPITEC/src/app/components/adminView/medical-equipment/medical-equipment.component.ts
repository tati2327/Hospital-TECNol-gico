import { Component, OnInit } from '@angular/core';
import { EquipoMedicoService } from 'src/app/services/administracion/equipo-medico.service';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-medical-equipment',
  templateUrl: './medical-equipment.component.html',
  styleUrls: ['./medical-equipment.component.css']
})
export class MedicalEquipmentComponent implements OnInit {

  constructor( public equipoMedicoService: EquipoMedicoService) { }
  
  listaEquipoMedico = []

  ngOnInit(): void {
    var equipoMedicoService = this.equipoMedicoService;
    var llavePrimaria;

    /** Ingresar las camas en la lista para mostrar tablas */
    this.equipoMedicoService.getEquipoMedico().subscribe((camas) => {
      this.listaEquipoMedico = camas;
    })

  }
}
