import { Component, OnInit } from '@angular/core';
import { EvaluacionServicioService } from 'src/app/services/paciente/evaluacion-servicio.service';
import { EvaluacionServicio } from 'src/app/models/paciente/evaluacion-servicio';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-evaluacion-servicio',
  templateUrl: './evaluacion-servicio.component.html',
  styleUrls: ['./evaluacion-servicio.component.css']
})
export class EvaluacionServicioComponent implements OnInit {

  constructor(public evaluacion: EvaluacionServicioService) { }

  ngOnInit(): void {
    var init = this.evaluacion;

    $(document).ready(function () {
      $("#Josu").click(function () {
        var aseo = $("#aseo").val();
        var trato = $("#trato").val();
        var punt = $("#puntualidad").val();
        var comen = $("#comentarios").val();
        return init.sendData(aseo,trato,punt,comen);
      });
    })

  }

}
