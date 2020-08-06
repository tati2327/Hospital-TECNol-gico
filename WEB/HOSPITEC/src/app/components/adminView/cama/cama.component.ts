import { Component, OnInit } from '@angular/core';
import { CamaService } from 'src/app/services/administracion/cama.service';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-cama',
  templateUrl: './cama.component.html',
  styleUrls: ['./cama.component.css']
})
export class CamaComponent implements OnInit {

  constructor( public camaService: CamaService) { }
  
  listaCamas = []

  ngOnInit(): void {
    var camaService = this.camaService;
    var llavePrimaria;

    /** Ingresar las camas en la lista para mostrar tablas */
    this.camaService.getCamas().subscribe((camas) => {
      this.listaCamas = camas;
    })

    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: Modificar una cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     */
    $(document).ready(function () {
      $("#enviarModificacionCama").click(function () {
        var noCama = $("#noCama").val();
        var tipo = $("#tipoCama").val();
        var noSalon = $("#noSalon").val();
        var disponilidad = $("#disponible").val();
        alert("Se ha modificado la cama");
        camaService.modificar(noCama, tipo, noSalon, disponilidad);
      });
    })

    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: crear una nueva cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     * FUNCION ENVIAR INFORMACION
     */
    $(document).ready(function () {
      $("#enviarCamaNueva").click(function () {
        var noCama = $("#nocama").val();
        var tipo = $("#tipotipocama").val();
        var noSalon = $("#nosalon").val();
        var disponilidad = $("#disponible").val();
        alert("Cama nueva");
        camaService.sendData(noCama, tipo, noSalon, disponilidad);
      });
    })

    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: Llamar la funcion que envia la llave primaria al api de la entidad
        que queremos eliminar.
        Autor-Autora: Tatiana.
        Entradas:llavePrimaria */
    $(document).ready(function () {
      $("#eliminarCama").click(function () {
        var $row = $(this).closest("tr");    // Find the row
        console.log(llavePrimaria);
        camaService.delete(llavePrimaria);
      });
    })

    $(document).ready(function() {
      $(".editTable").on('click',function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = $row.find("td:eq(0)").text(); // Find the text
        var col2=$row.find("td:eq(1)").text();
        llavePrimaria=primaryKey;
        $("#nocama").val(primaryKey);
        $("#recuperacionModificado").val(col2);

      });
    })
    
      /* 
    Proyecto 2 Bases de Datos: Hospital TECNológico
    Vista Procedimientos Medicos.
    Objetivo: Obtener la llave primaria de la fila que queremos eliminar para luego 
    utilizarla en la funcion en que se la enviamos al api.
    Autor-Autora: Pablo.
     */
    $(document).ready(function() {
      $(".deleteRows").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        llavePrimaria = $row.find("td:eq(0)").text(); // Find the text  
      });
    })
  }
}
