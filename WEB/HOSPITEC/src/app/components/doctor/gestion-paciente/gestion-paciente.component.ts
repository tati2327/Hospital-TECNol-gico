import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { Paciente } from 'src/app/models/paciente/paciente';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-gestion-paciente',
  templateUrl: './gestion-paciente.component.html',
  styleUrls: ['./gestion-paciente.component.css']
})
export class GestionPacienteComponent implements OnInit {

  patientsList: Paciente[] = [];
  constructor(public pacienteService: PacienteService) { }

  ngOnInit(): void {

    var init = this.pacienteService;

    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.patientsList = pacientes;
    })



    $(document).ready(function () {
      $("#sendModifiedPatient").click(function () {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = $row.find("td:eq(0)").text(); // Find the text
        //search for contra, id ya en la db
        var nom = $("#modNombre").val();
        var ape = $("#modApellidos").val();
        var ced = '0';
        var tel = $("#modTelefono").val();
        var fecha = $("#modNacimiento").val();
        var dir = $("#modDireccion").val();
        var trat = $("#modTratamiento").val();
        var pat = $("#modPatologias").val();
        var cont = '0';
        var est = $("#modestado").val();
        return init.modificar(ced, nom, ape, fecha, tel, dir, trat, pat,"",est,cont);
      });
    })

    $(document).ready(function () {
      $("#sendCreatedPatient").click(function () {
        var nom = $("#nombre").val();
        var ape = $("#apellidos").val();
        var ced = $("#cedula").val();
        var tel = $("#telefono").val();
        var fecha = $("#nacimiento").val();
        var dir = $("#direccion").val();
        var trat = $("#tratamiento").val();
        var pat = $("#patologias").val();
        //var dr = $("#doctorencargado").val();
        var est = $("#estado").val();
        var cont = '1234';
        return init.sendData(ced, nom, ape, fecha, tel, dir, trat, pat, "", est, cont );
      });
    })

    $(document).ready(function () {
      $("#del").click(function () {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKeyToDelete = $row.find("td:eq(0)").text(); // Find the text
        console.log("a");
        alert("a");
      });
    })

    $(document).ready(function () {
      $("#deletePatient").click(function () {
        return /*init.delete(primaryKeyToDelete)*/;
      });
    })

  }




  }

