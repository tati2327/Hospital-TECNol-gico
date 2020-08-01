import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { Paciente } from 'src/app/models/paciente/paciente';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
 
  constructor(public pacienteService: PacienteService) { }
  patientsList: Paciente[] = []
  ngOnInit(): void {



    var init = this.pacienteService;

    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.patientsList = pacientes;
    })

    /*
    $(document).ready(function () {
      $(".editTable").click(function () {
        var $row = $(this).closest("tr");    // Find the row
        var col1 = $row.find("td:eq(0)").text(); // Find the text
        var col2 = $row.find("td:eq(1)").text();
        var primaryKey = $row.find("td:eq(2)").text();
        var col4 = $row.find("td:eq(3)").text();
        var col5 = $row.find("td:eq(4)").text();

        var col9 = $row.find("td:eq(8)").text();

        $("#modifiedName").val(col1);
        $("#modifiedLastName").val(col2);
        $("#modifiedId").val(primaryKey);
        $("#modifiedAge").val(col4);
        $("#modifiedNationality").val(col5);

        $("#modifiedMedication").val(col9);

      });
    });*/

    $(document).ready(function () {
      $("#sendModifiedPatient").click(function () {
        var id = $("#id").val();
        var nom = $("#modNombre").val();
        var ape = $("#modApellidos").val();
        var ced = $("#modCedula").val();
        var tel = $("#modTelefono").val();
        var fecha = $("#modNacimiento").val();
        var dir = $("#modDireccion").val();
        var trat = $("#modTratamiento").val();
        var pat = $("#modPatologias").val();
        alert(id)
        alert(nom);
        alert(ape);
        alert(ced);
        alert(tel);
        alert(fecha);
        alert(dir);
        alert(trat);
        alert(pat);
        return /*init.modificar(id, ced, nom, ape, fecha, tel, dir, trat, pat)*/;
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
        alert(nom);
        alert(ape);
        alert(ced);
        alert(tel);
        alert(fecha);
        alert(dir);
        alert(trat);
        alert(pat);
        return /*init.sendData(ced, nom, ape, fecha, tel, dir, trat, pat)*/;
      });
    })

    $(document).ready(function () {
      $("#Josu").click(function () {
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


