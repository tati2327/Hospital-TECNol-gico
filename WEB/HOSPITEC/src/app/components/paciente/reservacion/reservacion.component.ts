import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/paciente/reservacion.service';
import { Reservacion } from 'src/app/models/paciente/reservacion';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {

  constructor(public reservacionService: ReservacionService) { }
  reservacionList: Reservacion[] = [];
  ngOnInit(): void {


    var init = this.reservacionService;

    this.reservacionService.getReservaciones().subscribe((pacientes) => {
      this.reservacionList = pacientes;
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
      $("#sendModifiedReservacion").click(function () {
        var id = $("#id").val();
        var ced = $("#cedMod").val();
        var ing = $("#inMod").val();
        var sal = $("#salMod").val();
        var cama = $("#camMod").val();
        alert(ced);
        alert(ing);
        alert(sal);
        alert(cama);
        return init.modificar(id, ced,ing,sal,cama);
      });
    })

    $(document).ready(function () {
      $("#sendCreatedReservacion").click(function () {
        var id = $("#idreservacion").val();
        var ced = $("#cedula").val();
        var ing = $("#ingreso").val();
        var sal = $("#salida").val();
        var cama = $("#cama").val();
        
        return init.sendData(id,ced,ing,sal,cama);
      });
    })

    $(document).ready(function () {
      $("#getDeleteData").click(function () {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKeyToDelete = $row.find("td:eq(0)").text(); // Find the text
        console.log("a");
        alert("a");
      });
    })

    $(document).ready(function () {
      $("#deleteReservacion").click(function () {
        return /*init.delete(primaryKeyToDelete)*/;
      });
    })

  }

}
